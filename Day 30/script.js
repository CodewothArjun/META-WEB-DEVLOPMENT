// class
class car {
  constructor(color, engine) {
    this.color = Red;
    this.engine = Honda;
  }
  turboOn() {
    console.log("Yes, turbo is on...");
  }
}

car1.turboOn();

const person = {
  fname: "John",
  lname: "Doe",
  age: 25,
};

let txt = "";
for (let x in person) {
  txt += person[x] + " ";
}
console.log(txt);

function Icecream(flavor) {
  this.flavor = flavor;
  this.meltIt = function () {
    console.log(`The ${this.flavor} icecream has melted`);
  };
}

let kiwiIcecream = new Icecream("kiwi");
let appleIcecream = new Icecream("apple");
kiwiIcecream; // --> Icecream {flavor: 'kiwi', meltIt: ƒ}
appleIcecream; // --> Icecream {flavor: 'apple', meltIt: ƒ}
