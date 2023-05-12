const colors = ["red", "orange", "yellow"];
var color;
for (color of colors) {
  console.log(color);
}

const object = {
  A: "Apple",
  B: "Ball",
  C: "Cat",
};

console.log(object);

const car2 = {
  speed: 200,
  color: "red",
};
console.log(Object.keys(car2));

const car4 = {
  speed: 400,
  color: "magenta",
};
console.log(Object.entries(car4));

var clothingItem = {
  price: 50,
  color: "beige",
  material: "cotton",
  season: "autumn",
};

for (key of Object.keys(clothingItem)) {
  console.log(keys, ":", clothingItem[key]);
}

function testBracketsDynamicAccess() {
  var dynamicKey;
  if (Math.random() > 0.5) {
    dynamicKey = "speed";
  } else {
    dynamicKey = "color";
  }

  var drone = {
    speed: 15,
    color: "orange",
  };

  console.log(drone[dynamicKey]);
}
testBracketsDynamicAccess();
