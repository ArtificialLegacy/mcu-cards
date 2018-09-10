let Command = require('../base/commands.js');
let settings = require('../config.js');
const Discord = settings.Discord;
const bot = settings.bot;

let help = new Command("help", 30, "info", "Displays info on all commands.", (tempMessage, tempArgs, tempPrefix) => {
  let cmdSort = {
    "info": [],
    "admin": [],
    "cards": []
  }
  
  fs.readdir("./", (err, files) => {
    if(err) console.log(err)

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0) {
        return;
    }

    jsfile.forEach((f, i) => {
      cmdCheck = require(`./commands/${f}`);
      cmdSort = cmdSort[cmdCheck.category].push(cmdCheck);
    });
    
  });
  
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
    
    message.author.send(embed);
    message.reply("A list of commands have been sent to your dms!");
});
