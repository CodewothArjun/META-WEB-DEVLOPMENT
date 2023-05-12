//function that takes an array as input and display all items of this array
function listArrayItems(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(i, arr[i]);
  }
}
var colors = ["Voilet", "Gray", "Brown", "White", "Black", "Blue", "Orange"];
listArrayItems(colors);

//function
function letterFinder(word, match) {
  for (var i = 0; i < word.length; i++) {
    if (word[i] == match) {
      //check if the current characater, word[i], is equal to the match
      console.log("Found the", match, "at", i);
    } else {
      console.log("---No match found at", i);
    }
  }
}

letterFinder("test", "t");

//Object
//creating an object with properties and their values
var assistantManager = {
  rangeTilesPerTurn: 3,
  socialSkills: 30,
  streetSmarts: 30,
  health: 40,
  specialAbility: "young, smart and ambitious",
  greeting: "Let's ba a productive.",
};

var table = {
  legs: 3,
  color: "Black",
  priceUSD: 100,
};

console.log(assistantManager.greeting);
console.log(assistantManager);
console.log(table); //display the object in the developer console
