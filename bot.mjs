import settings from './setup.js';
const Discord = settings.Discord;
const fs = settings.fs;

const bot = new Discord.Client({disableEveryone: true})

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
    let prefixes = JSON.parse(fs.readFileSync("./database/prefixes.json", "utf8"))
    
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
    
   let command = import('./base/commandExport');
    
    command[cmd].run(args);
});

bot.login("ENTER BOT TOKEN HERE");
