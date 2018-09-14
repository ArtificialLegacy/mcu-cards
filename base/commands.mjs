class Command {
  constructor(tempName, tempCooldown, tempCategory, tempDescription, tempAction) {
    this.name = tempName;
    this.cooldown = tempCooldown;
    this.category = tempCategory;
    this.description = tempDescription;
    this.action = tempAction;
    this.activeCooldown = false;
  }
  run(tempMessage, tempArgs, tempPrefix) {
    if(this.activeCooldown == false) {
      this.action(tempMessage, tempArgs, tempPrefix);
      this.activeCooldown = true;
      setTimeout(() => {
            this.activeCooldown = false;
            tempMessage.reply("Command cooldown finished!");
        }, this.cooldown * 1000)
    } else {
      tempMessage.reply("Command cooldown active.");
    }
  } 
}
export default Command;
