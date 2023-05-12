// inheritance is the process of inherit from one class and use in another class

// Parent class
class Animal {
  constructor(energy = 230, color = "Blue") {
    this.energy = energy;
    this.color = color;
  }

  isActive() {
    if (this.energy > 0) {
      this.energy -= 20;
      console.log(
        "(Active)    Energy is decreasing, currently at:",
        this.energy
      );
    } else if (this.energy == 0) {
      this.sleep();
    }
  }
  sleep() {
    this.energy += 20;
    console.log("(Rest)      Energy is increasing, currently at:", this.energy);
  }
  getColor() {
    console.log(`skin color: "${this.color}"`);
  }
}

// child1
class bird extends Animal {
  constructor(bname = "Parrot", canfly = true, haswings = true) {
    this.birdName = bname;
    this.canfly = canfly;
    this.haswings = haswings;
  }
  canfly() {
    console.log(
      `${this.birdName} can fly: ${this.canfly} because it has wings ${this.haswings}`
    );
  }
}

// child2
class monkey {}

// child3
class cat {}

// childs' of child3 / grand child of animal class
class houseCat {}

class tiger {}

// calling a methods
var animal1 = new Animal();
animal1.isActive();
animal1.sleep();
animal1.getColor();

let Bird = new bird();
animal1.canfly;
