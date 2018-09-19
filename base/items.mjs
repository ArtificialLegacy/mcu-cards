class Card {
  constructor(tempName, tempDescription, tempAsset, tempPrice, tempRarity) {
    this.name = tempName;
    this.description = tempDescription;
    this.asset = tempAsset;
    this.price = tempPrice;
    this.rarity = tempRarity; // common, uncommon, rare, epic, legendary, mythical
    this.type = "card";
  }
}

class Pack {
  constructor(tempName, tempDescription, tempAsset, tempPrice, tempContent) {
    this.name = tempName;
    this.description = tempDescription;
    this.asset = tempAsset;
    this.price = tempPrice;
    this.content = tempContent;
    this.type = "pack";
  }
}

class Set {
  constructor(tempName, tempDescription, tempAsset, tempPrice, tempContent) {
    this.name = tempName;
    this.description = tempDescription;
    this.asset = tempAsset;
    this.price = tempPrice;
    this.content = tempContent;
    this.type = "set";
  }
}

let items = {
  Set: Set,
  Pack: Pack,
  Card: Card
};

module.exports = items;
