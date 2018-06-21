const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require("./auth.json");

const regex = /\bmanu\b/gmi;

bot.on('ready', () => {
    bot.user.setUsername("ManuBot");
    console.log(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', async msg => {
    if (msg.author.bot) return;

    const command = msg.content.toLowerCase();

    if (command.match(regex)) {
        return msg.reply("Tu m'appelles Monsieur le président, ou monsieur !");
    }
});

bot.login(config.token);