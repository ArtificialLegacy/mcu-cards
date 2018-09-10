class Card {
  constructor(tempName, tempDescription, tempAsset, tempPrice, tempRarity) {
    this.name = tempName;
    this.description = tempDescription;
    this.asset = tempAsset;
    this.price = tempPrice;
    this.rarity = tempRarity; // common, uncommon, rare, epic, legendary, mythical
  }
}

class Pack {
  constructor(tempName, tempDescription, tempAsset, tempPrice, tempContent) {
    this.name = tempName;
    this.description = tempDescription;
    this.asset = tempAsset;
    this.price = tempPrice;
    this.content = tempContent;
  }
}

class Set {
  constructor(tempName, tempDescription, tempAsset, tempPrice, tempContent) {
    this.name = tempName;
    this.description = tempDescription;
    this.asset = tempAsset;
    this.price = tempPrice;
    this.content = tempContent;
  }
}

let items = {
  Set: Set,
  Pack: Pack,
  Card: Card
};

module.exports = items;
