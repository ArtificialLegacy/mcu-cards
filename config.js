const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});

let settings = {
  Discord: Discord,
  fs: fs,
  bot: bot
};

module.exports = settings;
