/*what is a constructor?
A constructor in JavaScript is a special method of a class for creating and initializing an object instance of that class1. A constructor enables you to provide any custom initialization that must be done before any other methods can be called on an instantiated object

*/

// eg. suppose we are going to by a vechile, then j

class Car {
  constructor(name, model, color, noofcar) {
    this.cusname = name;
    this.carmodel = model;
    this.carColor = color;
    this.NoOfCar = noofcar;
  }

  //   other methods
  buy() {
    console.log(
      `\nThanks for buying a  ${this.carmodel} model car.\nMore details of ${this.carmodel} car are:-  Color:${this.carColor}, No. of car you bought: ${this.NoOfCar},`
    );
  }

  cancel() {
    console.log(`\n${this.cusname} cancelled his order.`);
    this.NoOfCar = 0;
  }
}

let arjun = new Car("Arjun", "Suzuki", "Blue", "2");
arjun.buy();
arjun.cancel();
arjun.buy();
