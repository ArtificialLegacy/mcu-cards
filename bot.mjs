import settings from './setup.js';

const Discord = settings.Discord;
const fs = settings.fs;
const bot = settings.bot;

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

bot.on("guildCreate", async guild => {
    console.log("Joined a new guild: " + guild.name);
    if(bot.guilds.size > 1) {
        bot.user.setActivity(`Trading cards on ${bot.guilds.size} servers!`);
    } else {
        bot.user.setActivity(`Trading cards on ${bot.guilds.size} server!`);
    }
});

bot.on("guildDelete", async guild => {
    console.log("Left a guild: " + guild.name);
    if(bot.guilds.size > 1) {
        bot.user.setActivity(`Trading cards on ${bot.guilds.size} servers!`);
    } else {
        bot.user.setActivity(`Trading cards on ${bot.guilds.size} server!`);
    }
});

bot.on("message", async message => {
    let prefixes = JSON.parse(fs.readFileSync("./database/prefixes.json", "utf8"));
    
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    
    if(!prefixes[message.guild.id]){
        prefixes[message.guild.id] = {
            prefix: "!"
        };
    }
    
    let prefix = prefixes[message.guild.id].prefix;
    
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    if(!message.content.startsWith(prefix)) return;
    
    cmd = cmd.slice(prefix.length);
    console.log(`Command execution attempt: ${prefix}${cmd}${args}`);
    
    let command = require(`./commands/${cmd}.js`);
    
    if(command){
        command.run(message, args, prefix);
    } else {
        message.reply("Unknown command.");
    }
});

const token = JSON.parse(fs.readFileSync("./token.json", "utf8"));
bot.login(token.token);
