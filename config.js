const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});

const Enmap = require('enmap');
const EnmapLevel = require('enmap-level');
const data = new Enmap({
  provider: new EnmapLevel({
    name: 'data' 
  });
});

let settings = {
  Discord: Discord,
  fs: fs,
  bot: bot,
  Enmap: Enmap,
  EnmapLevel: EnmapLevel,
  data: data
};

module.exports = settings;
