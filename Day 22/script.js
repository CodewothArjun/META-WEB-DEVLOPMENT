var alpha = "ARJUN";
var len = alpha.length;
var styles;
for (i = 0; i <= len; i++) {
  styles =
    "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: yellow;padding:15px; color: purple";
  console.log("%c" + alpha[i], styles);
}

styles =
  "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: gray;padding:15px; color: black";
var names = "Sitaram";
console.log("%c" + names, styles);

// exercise
var i;
for (i = 1; i <= 10; i++) {
  if (i == 1) {
    console.log("Gold medal");
  }
  if (i == 2) {
    console.log("Silver medal");
  }
  if (i == 3) {
    console.log("Bronze medal");
  }
  if (i > 3) {
    console.log(i);
  }
}

// switch case
var j = 1;
for (j = 1; j <= 10; j++) {
  switch (j) {
    case 1:
      console.log("Gold medal");
      break;
    case 2:
      console.log("Sjlver medal");
      break;
    case 3:
      console.log("Bronz medal");
      break;
    default:
      console.log(j);
  }
}
var n = 1,
  i;
if (i == n && i == n) {
  console.log("Hello");
} else {
  console.log("Goodbye");
}

console.log(!false);
