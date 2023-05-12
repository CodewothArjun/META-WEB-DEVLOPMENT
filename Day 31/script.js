class vechial {
  constructor(color, lighton) {
    this.color = red;
    this.lighton = yes;
  }
}

var bird = {
  haswings: true,
  canfly: true,
  hasfeather: true,
};

var eagle1 = Object.create(bird);
console.log("eagle1 can fly: ", eagle1.canfly);
console.log("eagle1 has wings: ", eagle1.haswings);
console.log("eagle1 has feather: ", eagle1.hasfeather);

var eagle2 = Object.create(bird);
console.log("eagle2 has wings: ", eagle2.haswings);

var penguin1 = Object.create(bird);
penguin1.canfly = false;
console.log("penguin1 can fly: ", penguin1.canfly);
console.log("penguin1 can fly: ", penguin1);
