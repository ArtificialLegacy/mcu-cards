import Command from '../base/commands.mjs';
import settings from '../config.js';
const Discord = settings.Discord;
const bot = settings.bot;
const fs = settings.fs;
const data = settings.data;

let prefix = new Command("prefix", 0, "admin", "Changes the guild command prefix.", (tempMessage, tempArgs, tempPrefix) => {
    if(!tempArgs[0]) {
        return tempMessage.reply("Not prefix input.");
    }
    
    let prefix = data.get(`${tempMessage.guild.id}.prefix`);
    data.set(`${tempMessage.guild.id}.prefix`, "!");

    tempMessage.reply("Prefix updated");
});
  
export default prefix;
