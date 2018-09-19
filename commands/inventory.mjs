import settings from '../config.js';
const Discord = settings.Discord;
const fs = settings.fs;
const data = settings.data;
const bot = settings.bot;

import Command from '../base/commands.mjs';

let inventory = new Command("inventory", 10, "cards", "Opens your card inventory.", (tempMessage, tempArgs, tempPrefix) => {
  let inventories = data.get("inventory");
  if(!inventories){
    inventories = {};
  }
  if(!inventories[tempMessage.guild.id]){
   inventories[tempMessage.guild.id] = {}; 
  }
  if(!inventories[tempMessage.guild.id][tempMessage.author.id]){
   inventories[tempMessage.guild.id][tempMessage.author.id] = {
     
   };
   data.set("inventory", inventories);
  }
 
  let page = 0;
  if(tempArgs[0]){
    page = tempArgs[0];
  } else {
    page = 1;
  }
  
  let items = [];
  for(var sort in inventories[tempMessage.guild.id][tempMessage.author.id]){
    items.push(sort);
  }
  
   if(items.length == 0){
   tempMessage.reply("Your inventory is empty!");
   return;
  }
  
  let embed = new Discord.RichEmbed()
  .setTitle(`${tempMessage.author.username}'s Inventory (Page ${page})`)
  .setColor()
  .setfooter("Inventory holds all cards, packs, and sets.");
  
  for(i = 0; i < 24; i++){
    embed.addField(items[i*page].name, items[i*page].description);
  }
  tempMessage.channel.send(embed);
   
});

export default inventory;
