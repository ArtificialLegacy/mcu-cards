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
     cards: {},
     packs: {},
     sets: {},
   };
   data.set("inventory", inventories);
  }
  if(inventories[tempMessage.guild.id][tempMessage.author.id].cards.length == 0 && inventories[tempMessage.guild.id][tempMessage.author.id].packs.length == 0 && inventories[tempMessage.guild.id][tempMessage.author.id].sets.length == 0){
   tempMessage.reply("Your inventory is empty!");
   return;
  }
  let page = 0;
  if(tempArgs[0]){
    page = tempArgs[0];
  } else {
    page = 1;
  }
   
});

export default inventory;
