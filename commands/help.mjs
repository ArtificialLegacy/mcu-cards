import Command from '../base/commands.js';
import settings from '../config.js';
const Discord = settings.Discord;
const bot = settings.bot;
const fs = settings.fs;

import commands from '../base/commandExport.mjs';

let help = new Command("help", 30, "info", "Displays info on all commands.", (tempMessage, tempArgs, tempPrefix) => {
  let cmdSort = {
    "info": [],
    "admin": [],
    "cards": []
  }
  
  for (var sort in commands) {
    if (!commands.hasOwnProperty(sort)) {
        continue;
    }
    if(sort.category == "info"){
      cmdSort.info.push(sort);
    } else if(sort.category == "admin"){
      cmdSort.admin.push(sort);
    } else if(sort.category == "cards"){
      cmdSort.cards.push(sort);
    } else {
      continue;
    }
}
  
  let embed = new Discord.RichEmbed()
    .setTitle("Help")
    .setColor("#8e278e");
    
    if(cmdSort.info.length !== 0){
      embed.addField("**Info Commands**", " ");
      for(i=0; i<cmdSort.info.length-1; i++){
        embed.addField(cmdSort.info[i].name, cmdSort.info[i].description);
      }
    }
    
    if(cmdSort.cards.length !== 0){
      embed.addField("**Card Commands**", " ");
      for(i=0; i<cmdSort.cards.length-1; i++){
        embed.addField(cmdSort.cards[i].name, cmdSort.cards[i].description);
      }
    }
    
    if(cmdSort.admin.length !== 0){
      embed.addField("**Admin Commands**", " ");
      for(i=0; i<cmdSort.admin.length-1; i++){
        embed.addField(cmdSort.admin[i].name, cmdSort.admin[i].description);
      }
    }
    
    tempMessage.author.send(embed);
    tempMessage.reply("A list of commands have been sent to your dms!");
});

export default help;
