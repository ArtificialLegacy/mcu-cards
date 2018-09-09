import Command from '../base/commands.js';

let botinfo = new Command("botinfo", 30, "info", "Shows ping and bot information.", (tempArgs) => {
  let boticon = bot.user.displayAvatarURL;
  let embed = new Discord.RichEmbed()
    .setTitle("Bot Information")
    .setColor("#8e278e")
    .setThumbnail(bot.user.displayAvatarURL)
    .addField("Server Count", bot.guilds.size)
    .addField("User Count", bot.guilds.users.size)
    .addField("Ping", (Math.round(bot.ping) + " ms"));

    message.channel.send(embed);
});

export default botinfo;
