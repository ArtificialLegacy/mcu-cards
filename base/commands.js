class Command {
  constructor(tempName, tempCooldown, tempCategory, tempDescription, tempAction) {
    this.name = tempName;
    this.cooldown = tempCooldown;
    this.category = tempCategory;
    this.description = tempDescription;
    this.action = tempAction;
    this.activeCooldown = false;
  }
  run(tempArgs) {
    if(this.activeCooldown == false) {
      this.action(tempArgs);
      this.activeCooldown = true;
      setTimeout(() => {
            this.activeCooldown = false;
        }, this.cooldown * 1000)
    }
  }
}

export Command;
