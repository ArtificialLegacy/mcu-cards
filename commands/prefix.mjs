import Command from '../base/commands.js';
import settings from '../config.js';
const Discord = settings.Discord;
const bot = settings.bot;
const fs = settings.fs;

let prefix = new Command("prefix", 0, "admin", "Changes the guild command prefix." (tempMessage, tempArgs, tempPrefix) => {
  if(!tempArgs[0]) {
    return tempMessage.reply("Not prefix input.");
  }
  let prefixes = JSON.parse(fs.readFileSync("../database/prefixes.json", "utf8"));
  prefixes[message.guild.id] = {
    prefix: tempArgs
  };
  fs.writeFileSync("../database/prefixes.json", JSON.stringify(prefixes,null,4), (err) => {
        if (err) console.log(err)
  });
  tempMessage.reply("Prefix updated");
});
  
export default prefix;
