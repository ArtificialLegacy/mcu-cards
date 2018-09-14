import setting from '../config.js';
const Discord = settings.Discord;
const fs = settings.fs;
const data = settings.data;
const bot = settings.bot;

import Command from '../base/commands.mjs';

let debug = new Command("debug", 0, "admin", "Bot debugging command. (Devs only)", (tempMessage, tempArgs, tempPrefix) => {
  if(!message.author.id === "261619158096150528") return message.reply("You can not use this command!");

    let value = (eval(args.join(" ")));

    let embed = new Discord.RichEmbed()
    .setDescription("Eval")
    .setColor("#8e278e")
    .addField("Requested User", message.author)
    .addField("Input", tempArgs)
    .addField("Result", value);

    message.channel.send(embed);
});

export default debug;
