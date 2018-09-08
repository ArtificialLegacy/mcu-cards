class Command {
  constructor(tempName, tempCooldown, tempCategory, tempDescription, tempFunction) {
    this.name = tempName;
    this.cooldown = tempCooldown;
    this.category = tempCategory;
    this.description = tempDescription;
    this.function = tempFunction;
    this.activeCooldown = false;
  }
  run(tempArgs) {
    if(this.activeCooldown == false) {
      this.function(tempArgs);
      this.activeCooldown = true;
      setTimeout(() => {
            this.activeCooldown = false;
        }, this.cooldown * 1000)
    }
  }
}

export Command;
