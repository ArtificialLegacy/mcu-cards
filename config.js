const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});

const Enmap = require("enmap");
const database = new Enmap({name: "points"});

let settings = {
  Discord: Discord,
  fs: fs,
  bot: bot,
  Enmap: Enmap,
  database: database
};

module.exports = settings;
