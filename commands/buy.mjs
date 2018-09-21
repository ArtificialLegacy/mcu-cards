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
    let page = 1;
    if(!tempArgs[1]){
     page = 1; 
    } else {
      page = tempArgs[1];
    }
    let indCheck = ((page-1)*24)+1;
    if(indCheck > items.length){
      tempMessage.reply("This page is empty!");
      return;
    }
  } else if(tempArgs[0] == "buy"){
    if(!tempArgs[1]){
      tempMessage.reply("No item input!");
      return;
    }
  } else {
    tempMessage.reply("Invalid subcommand! (view, buy)");
    return;
  }
});

export default buy;
