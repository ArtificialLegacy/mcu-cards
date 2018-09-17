import settings from '../config.js';
const Discord = settings.Discord;
const fs = settings.fs;
const data = settings.data;

import Command from '../base/commands.mjs';

let inventory = new Command("inventory", 10, "cards", "Opens your card inventory.", (tempMessage, tempArgs, tempPrefix) => {
  
});

export default inventory;
