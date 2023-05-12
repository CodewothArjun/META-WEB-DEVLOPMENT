// Global scope
var num = 8;

// Constant
const pi = 3.14;
function sum() {
  // block scope
  let area = pi * pi + num;

  return area;
}

console.log(sum());

function meal(animal) {
  animal.food = animal.food + 10;
}

var rat = {
  food: 10,
};
meal(rat);
meal(rat);

console.log(rat.food);

// Object code
var pant = 98;
var tax = 10;
function totalPrice() {
  return pant * tax;
}

var toPay = totalPrice(pant, tax);
console.log(toPay);

// introduction to object-orientd programming

var area1 = {
  side1: 10,
  side2: 20,
  areaRect: function () {
    var calculation = area1.side1 * area1.side2;
    console.log("Area of rectangle: ", calculation);
  },
};
area1.areaRect();

var area2 = {
  side1: 12,
  side2: 32,
  areaRect: function () {
    var calculation = this.side1 * this.side2;
    console.log("Area of rectangle: ", calculation);
  },
};
area2.areaRect();
