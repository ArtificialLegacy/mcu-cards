class Card {
  constructor(tempName, tempDescription, tempAsset, tempPrice) {
    this.name = tempName;
    this.description = tempDescription;
    this.asset = tempAsset;
    this.price = tempPrice;
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
