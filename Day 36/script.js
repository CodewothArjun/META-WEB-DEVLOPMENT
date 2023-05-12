/*const fruits = ["kiwi", "mango", "apple", "pear"];
function appendIndex(fruit, index) {
  console.log(`${index}. ${fruit}`);
}
fruits.forEach(appendIndex);

// using for of loops in object/arry
for (fru of fruits) {
  console.log(fru);
}

//calling and defining in same line
const veggies = ["onion", "garlic", "potato"];
veggies.forEach(function (veggie, index) {
  console.log(`${index}.${veggie}`);
});

//
// filter
const nums = [0, 10, 20, 30, 40, 50];
var num = nums.filter(function (num) {
  return num > 20;
});
console.log(num);

const digit = [1, 3, 23, 64, 788, 0];
let number = digit.filter((nanu) => {
  return nanu < 60;
});
console.log(number);


//
//map
[0, 10, 20, 30, 40, 50].map(function (num) {
  return num / 10;
  console.log(num);
});


//



//
//
//
const result = [];
const drone = {
  speed: 100,
  color: "yellow",
};
const droneKeys = Object.keys(drone);
droneKeys.forEach(function (key) {
  result.push(key, drone[key]);
});
console.log(result); */

// Task 1

// var dairy = [
//   "cheese",
//   "sour cream",
//   "milk",
//   "yogurt",
//   "ice cream",
//   "milkshake",
// ];

// function logDairy() {
//   for (var output of dairy) {
//     console.log(output);
//   }
// }

// logDairy();

// // Task 2

// const animal = {
//   canJump: true,
// };

// const bird = Object.create(animal);

// bird.canFly = true;

// bird.hasFeathers = true;

// function birdCan() {
//   for (var key of Object.keys(bird)) {
//     console.log(`${key}: ${bird[key]}`);
//   }
// }

// birdCan();

// // Task 3

// function animalCan() {
//   for (var key in bird) {
//     console.log(`${key}: ${bird[key]}`);
//   }
// }

// animalCan();

//
/*
//Without using of spread oprerator
function travell(place1, place2, place3, place4) {
  console.log(
    `First visit ${place1} \nSecondly ${place2}, \nIn the same way visit ${place3} \nfinally, visit ${place4}`
  );
}

// using of spread oprerator
console.log("\n\nThrough using spread operator");
function travell(...places) {
  console.log(
    `First visit ${places[2]} \nSecondly ${places[1]}, \nIn the same way visit ${places[0]} \nfinally, visit ${places[3]}`
  );
}

travell("Dolakha", "Gorkha", "Rukum", "Pokhera");
*/

/*
//set
let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");

console.log(bestBoxers);
//get
console.log(bestBoxers.get(1));

//

const numbers = [65, 44, 12, 4]; //assigning
const newArr = numbers.map(myFunction); //calling a function

function myFunction(num) {
  //defining a function
  return num * 10;
}

console.log(newArr); //printing

// set
const repetitiveFruits = ["apple", "pear", "apple", "pear", "plum", "apple"];
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits);


//spread operator /  Rest operator 

const fruits = ["apple", "pear", "plum"];
const berries = ["blueberry", "strawberry"];
const fruitsAndBerries = [...fruits, ...berries]; // concatenate
console.log(fruitsAndBerries); // outputs a single array
*/

/*
// without using destructuring an array
var book = ["Science", 2341, 1000, "Sunrise", "Arjun"];
let naam = book[0];
let pages = book[1];
let price = book[2];
let publication = book[3];
let author = book[4];
console.log(naam, pages, price, publication, author);

// using destructuring an array
const places = ["Dolakha", "Dehli", "Bhojpur", "Lakhnau", "Bhairaha"];
const [place1, place2, place3, place4, place5] = places;
console.log(place1, place2, place3, place4, place5);

// let greeting = "Hello";
let greeting = ["H", "e", "l", "l", "o"];
const arrayOfChars = [...greeting];
let character = greeting[0];
console.log(arrayOfChars); //
*/

//
const car1 = {
  speed: 200,
  color: "yellow",
};
const car2 = {
  ...car1,
  model: "suzuki",
};
car1.speed = 201;

console.log(`car1: ${car1.speed}, car2: ${car2.speed}, modle: ${car2.model}`);

//
const fruits1 = ["apples", "pears"];
const fruits2 = [...fruits1];
fruits1.pop();
console.log(fruits1, "not", fruits2);

let set = new Set();
set.add(1);
set.add(2);
set.add(3);
set.add(2);
set.add(1);
console.log(set);

function count(...basket) {
  console.log(basket.length);
}

count(10, 9, 8, 7, 6);

// spread operator is three dot(.) operator, and rest operator is also a three dot(.) operator but called in arguments.
