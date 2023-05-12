// // learning day-28
// function letterFinder(word, match) {
//     var condition1 = typeof(word) == 'string' && word.length >= 2; //if the word is a string and the length is greater than or equal to 2
//     var condition2 = typeof(match) == 'string' && match.length == 2; //if the match is a string and the length is equal to 1
//     if(condition1 && condition2) { //if both condition matches
//         for(var i = 0; i < word.length; i++) {
//             if(word[i] == match) {
//                 //check if the character at this i position in the word is equal to the match
//                 console.log('Found the', match, 'at', i)
//             } else {
//                 console.log('---No match found at', i)
//             }
//         }
//     } else {
//         //if the requirements don't match
//         console.log("Please pass correct arguments to the function")
//     }
// }
// // letterFinder([],[])
// letterFinder("cauliflower","ca")  var result = null;
// var result = null;
// console.log(result);

// var x;

// if(x === null) {
//   console.log("null");
// } else if(x === undefined) {
//   console.log("undefined");
// } else {
//   console.log("ok");
// }

// throw new Error();
// console.log("Hello");

// try {
//   throw new Error();
//   console.log("Hello");
// } catch (err) {
//   console.log("Goodbye");
// }
// var str = "Hello";

// console.log(str.match("jello"));

// try {
//   Number(5).toPrecision(300);
// } catch (e) {
//   console.log("There was an error");
// }

// Recursive function
// function myDay() {
//   console.log("Morning");
//   console.log("Afternoon");
//   console.log("Evening");
//   myDay();
// }
// myDay();

// let coun = 5;
// function count() {
//   console.log(coun);
//   coun = coun - 1;
//   if (coun === 0) return;
//   count();
// }
// count();

// functional paradigms
// 1
function getTotal(a, b) {
  return a + b;
}
var num1 = 2;
var num2 = 3;

var total = getTotal(num1, num2);
console.log(total);

// 2
function getDistance(mph, h) {
  return mph * h;
}
var mph = 60;
var h = 2;
var distance = getDistance(mph, h);

console.log(distance); // <====== THIS HERE!

// Object paradigms
var virtualPet = {
  sleepy: true,
  nap: function () {},
};
console.log(virtualPet);
