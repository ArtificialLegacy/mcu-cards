let items = require("../base/items.js");
let Card = items.Card;

const cards = {
  characters: {
    "Thor": new Card("Thor", "The god of thunder.", "http://www.buffed.de/screenshots/original/2016/07/Chris-Hemsworth-Thor-Ragnarok-pc-games1.jpg", 75, "Epic"),
    "Thor2": new Card("Thor", "The lord of thunder.", "https://media0dk-a.akamaihd.net/63/86/6efba9b0e336f748410100dd500c6f66.jpg", 80, "Epic"),
    "Hulk": new Card("The Hulk", "Hulk Smash!", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX4t3_-BQRuz_d_SfETCGN2zVIBPuE_fC8iL8bzchaH4Asut9H", 20, "Uncommon"),
    "Hulk2": new Card("The Hulk", "Hulk Smash!", "https://media.wired.com/photos/59b83283b412f33ba9daa3f5/master/pass/thehulk-FA.jpg", 25, "Uncommon"),
   "Grandmaster": new Card("The Grandmaster", "Time works real different around these parts.", "https://upload.wikimedia.org/wikipedia/en/thumb/0/00/Jeff_Goldblum_as_the_Grandmaster_in_Thor_Ragnarok.jpg/170px-Jeff_Goldblum_as_the_Grandmaster_in_Thor_Ragnarok.jpg", 50 "Rare"),
    "Spiderman": new Card("Spiderman", "Hey everyone.", "https://movietvtechgeeks.com/wp-content/uploads/2017/07/spiderman-homecoming-great-reviews-lands.jpg", 40, "Rare"),
    "Spiderman2": new Card("Spiderman","Yeah. A kid who can stop a bus with his bare hands.", "https://www.wallmesh.com/wp-content/uploads/2018/05/Iron-Spider-Man-Photo-HD-Wallpaper-1920x1080.jpg", 50, "Rare"),
    "Thanos": new Card("Thanos", "Perfectly balanced, as all things should be.", "https://www.sideshowtoy.com/wp-content/uploads/2018/04/marvel-avengers-infinity-war-thanos-sixth-scale-figure-hot-toys-feature-903429-1.jpg", 100, "Legendary"),
    "DoctorStrange": new Card("Doctor Strange", "I don't believe in fairy tales about chakras or energy or the power of belief.", "https://images.spot.im/v1/production/p6yd1fpcoekrg3sofm5e", 40, "Rare"),
    "AncientOne": new Card("Ancient One", "What if I told you that reality is one of many?", "https://www.usajacket.com/blog/wp-content/uploads/2018/08/Doctor-Strange-The-Ancient-One-Costume.jpg", 35, "Uncommon"),
    "Gamora": new Card("Gamora", "I am going to die surrounded by the biggest idiots in the galaxy.", "https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/6/61/Gamora_AIW_Profile.jpg/revision/latest/scale-to-width-down/310?cb=20180518212221", 55, "Rare")
  },
  items: {
    
  }
}

export default cards;
