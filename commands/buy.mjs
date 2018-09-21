import settings from '../config.js';
const Discord = settings.Discord;
const data = settings.data;
const bot = settings.bot;

import Command from '../base/commands.mjs';
import cards from '../index/cards.mjs';
import packs from '../index/packs.mjs';
import sets from '../index/sets.mjs';

let buy = new Command("buy", 10, "cards", "Open the shop and buy items", (tempMessage, tempArgs, tempPrefix) => {
  if(!tempArgs[0]){
    tempMessage.reply("No subcommand input! (view, buy)");
    return;
  }
  if(tempArgs[0] == "view"){
    
  } else if(tempArgs[0] == "buy"){
    
  } else {
    tempMessage.reply("Invalid subcommand! (view, buy)");
    return;
  }
});

export default buy;
