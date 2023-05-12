// first way to write a object in js

var house2 = {};
house2["rooms"] = 4;
house2["color"] = "pink";
house2["priceUSD"] = 12345;
console.log(house2);
console.log("\n");

// second way to write a object in js
var house = {
  room: 4,
  color: "Yellow",
  price: 98000,
  avialiability: 1,
};
console.log(house);
console.log("\n");

// third way of writing a object in js
var tool = {};
tool.basic = "screw driver";
tool.price = 2134;
tool.pack = "Unpacked";
console.log(tool);
console.log("\n");

// array are object
var fruit = ["I", "Love", "You"];
fruit.push("orange"); //push method is to add the new items in the array
fruit.push("Apple");
fruit.push("<Mango>");

fruit.pop();
console.log(fruit); // pop method is used to delete the last item of array

// function in array
function arrayBuilder(one, two, three) {
  var arr = [];
  arr.push(one);
  arr.push(two);
  arr.push(three);
  console.log(arr);
}

// calling
arrayBuilder("apple", "pear", "plum");

// number constant
console.log("Pi: " + Math.PI);
console.log("Eular: " + Math.E);
console.log("Loritham: " + Math.LN2);
console.log("closest: " + Math.ceil(5.45));
console.log("Round: " + Math.round(5.5));
console.log("Floor: " + Math.floor(5.6));
console.log("Trim: " + Math.trunc(5.6098908));
console.log("Power: " + Math.pow(5, 3));
console.log("square root: " + Math.sqrt(100));
console.log("cube root: " + Math.cbrt(125));
console.log("Absolute value: " + Math.abs(-4));
console.log("Log: " + Math.log(1));
console.log("Trignometry: " + Math.sin(30));
console.log("Trignometry: " + Math.cos(30));
console.log("compare-min/max: " + Math.min(30, 5, 23));
console.log("Random: " + Math.random());



// looping
var names = "Arjun";
var i;
for (i = names.length; i >= 0; i--) {
  console.log(names[i]);
}
var names = ["Arjun", "Sarina", "Sitaram", "Gita", "Bhupal"]; //array literals
var i;
for (i = 0; i < names.length; i++) {
  console.log(names[i]);
}
console.log("\n");

var chars = "Arjun Kumar";
var con = "ArjunMan";
console.log("Concate: " + chars.concat(" Rokka"));
console.log("Indexof: " + chars.indexOf("j"));
console.log("Character: " + chars.charAt(2));
console.log("lastIndexof: " + chars.lastIndexOf("K"));
console.log("Split: " + con.split("M"));
console.log("Lowercase: " + con.toLocaleLowerCase());
console.log("Uppercase: " + con.toLocaleUpperCase());

