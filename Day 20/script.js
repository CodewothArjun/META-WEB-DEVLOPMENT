console.log("Conditional Statement");
var num = 10;
if (num > 20) {
  console.log("Your number is less than 20.");
} else {
  console.log("Your number is greater than 20");
}

// ladder if else
var mark = 50;
if (mark > 90) console.log("Grade: A+ ");
else if (mark > 80 && mark < 90) console.log("Your garade is B+");
else if (mark < 80 && mark > 70);
else console.log("You are fail.");

// swith case
switch (mark) {
  case 90:
    console.log("Grade: A+ ");
    break;
  case 80:
    console.log("Grade: B+ ");
    break;
  case 70:
    console.log("Grade: c+ ");
    break;
  default:
    console.log("\nxyou fail in exam");
}
