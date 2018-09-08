const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true})
const fs = require("fs");

bot.on("ready", async () => {
    if(bot.guilds.size > 1) {
        bot.user.setActivity(`Trading cards on ${bot.guilds.size} servers!`);
        console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`)
    } else {
        bot.user.setActivity(`Trading cards on ${bot.guilds.size} server!`);
        console.log(`${bot.user.username} is online on ${bot.guilds.size} server!`)
    }
    bot.user.setStatus("online");
});

bot.on("guildCreate", guild => {
    console.log("Joined a new guild: " + guild.name);
    if(bot.guilds.size > 1) {
        bot.user.setActivity(`Trading cards on ${bot.guilds.size} servers!`);
    } else {
        bot.user.setActivity(`Trading cards on ${bot.guilds.size} server!`);
    }
});

bot.on("guildDelete", guild => {
    console.log("Left a guild: " + guild.name);
    if(bot.guilds.size > 1) {
        bot.user.setActivity(`Trading cards on ${bot.guilds.size} servers!`);
    } else {
        bot.user.setActivity(`Trading cards on ${bot.guilds.size} server!`);
    }
});

bot.on("message", async () => {
    let prefixes = JSON.parse(fs.readFileSync("./database/prefixes.json", "utf8"))
    
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    
    if(!prefixes[message.guild.id]){
        prefixes[message.guild.id] = {
            prefixes: "!"
        };
    }
    
    let prefix = prefixes[message.guild.id].prefixes;
});

bot.login("ENTER BOT TOKEN HERE");
