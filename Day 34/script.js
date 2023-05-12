// class Cake {
//   constructor(lyr) {
//     this.layers = lyr + 1;
//   }
// }

// var result = new Cake(1);
// console.log(result.layers);

// class Animal {
//   constructor(lg) {
//     this.legs = lg;
//   }
// }

// class Dog extends Animal {
//   constructor() {
//     super(4);
//   }
// }

// var result = new Dog();
// console.log(result.legs);

// class Animal {}

// class Cat extends Animal {
//   constructor() {
//     super();
//     this.noise = "meow";
//   }
// }

// var result = new Animal();
// console.log(result.noise);

// now

// class Animal {}

// class Cat extends Animal {
//   constructor() {
//     super();
//     this.noise = "meow";
//   }
// }

// var result = new Animal();
// console.log(result.noise);

// class Person {
//   sayHello() {
//     console.log("Hello");
//   }
// }

// class Friend extends Person {
//   sayHello() {
//     console.log("Hey");
//   }
// }

// var result = new Friend();
// result.sayHello();

// template literals
var greet = "Hello";
var place = "World";
console.log(greet + " " + place + "!"); //display both variables without using template literals

greet = "Hello";
place = "World";
console.log(`${greet} ${place} !`); //display both variables using template literals
