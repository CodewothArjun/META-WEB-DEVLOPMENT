// now we are going to explore the object method in js
var car = {};
car.color = "Red";
car.milage = 2345;
// function method adding in object
car.funkey = function () {
  console.log("Engine is running.");
};
car.lightsOn = function () {
  console.log("The lights are on.");
};
console.log(car);
car.funkey();
car.lightsOn();
console.log("\n");

// use of typeof operator
var num = 1234;
var string = "Arjun";
var arr = ["Cat", "Ball", "Ice"];
var test = 2 < 4;
var fun = function () {
  console.log("I am a function.");
};
console.log("Which types of data: " + typeof num);
console.log(typeof string);
console.log(typeof arr);
console.log(typeof test);
console.log(typeof fun);

var dog = {
  color: "brown",
  height: 30,
  length: 60,
};
dog["type"] = "corgi"; // We can add the object property like this also
console.log(dog);
