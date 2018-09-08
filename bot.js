const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true})
const fs = require("fs");

bot.on("ready", async () => {
    if(bot.guilds.size > 1) {
        bot.user.setActivity(`Legacy-RPG on ${bot.guilds.size} servers!`);
        console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`)
    } else {
        bot.user.setActivity(`Legacy-RPG on ${bot.guilds.size} server!`);
        console.log(`${bot.user.username} is online on ${bot.guilds.size} server!`)
    }
    bot.user.setStatus("online");
});

bot.on("guildCreate", guild => {
    console.log("Joined a new guild: " + guild.name);
    if(bot.guilds.size > 1) {
        bot.user.setActivity(`Legacy-RPG on ${bot.guilds.size} servers!`);
    } else {
        bot.user.setActivity(`Legacy-RPG on ${bot.guilds.size} server!`);
    }
});

bot.on("guildDelete", guild => {
    console.log("Left a guild: " + guild.name);
    if(bot.guilds.size > 1) {
        bot.user.setActivity(`Legacy-RPG on ${bot.guilds.size} servers!`);
    } else {
        bot.user.setActivity(`Legacy-RPG on ${bot.guilds.size} server!`);
    }
});

bot.on("message", async () => {
  
})

bot.login("ENTER BOT TOKEN HERE");
