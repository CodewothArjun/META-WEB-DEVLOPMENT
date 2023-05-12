//use of if else condition
age = 10;
if (age > 65) {
  console.log("Your income is pension");
} else if (age < 65 && age >= 18) {
  console.loga("Each month you get a salary");
} else if (age < 18) {
  console.log("You will get from your parents");
} else {
  console.log("Enter a valid number !");
}

// using a switch case
var day = 1;
switch (day) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Satuarday");
    break;
}

//for loop
console.log("For Loop");
var i;
for (i = 0; i < 5; i++) {
  console.log("Happy Birthday !!");
}

//while loop
console.log("While Loop");
var j = 10;
while (j > 0) {
  console.log(j);
  j--;
}
console.log("Happy Birthday !!!");

// more practice
var year = 2022;
while (year > 2015) {
  console.log(year);
  year--;
}
