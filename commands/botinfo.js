let Command = require('../base/commands.js');
let settings = require('../config.js');
const Discord = settings.Discord;
const bot = settings.bot;

let botinfo = new Command("botinfo", 30, "info", "Shows ping and bot information.", (tempMessage, tempArgs, tempPrefix) => {
  let embed = new Discord.RichEmbed()
    .setTitle("Bot Information")
    .setColor("#8e278e")
    .setThumbnail(bot.user.displayAvatarURL)
    .addField("Server Count", bot.guilds.size) 
    .addField("Ping", (Math.round(bot.ping) + " ms"));

    tempMessage.channel.send(embed);
});

module.exports = botinfo;
