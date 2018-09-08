class Card {
  constructor(tempName, tempDescription, tempAsset) {
    this.name = tempName;
    this.description = tempDescription;
    this.asset = tempAsset;
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

export Card;
export Pack;
