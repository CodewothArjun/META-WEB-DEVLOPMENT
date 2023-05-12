try {
  throw new ReferenceError();
} catch (err) {
  console.log(err);
  console.log("There was a refrence error.");
}
// Reference Error
// console.log(username);

// syntax error
// Note: syntax error cannot detect by try-catch block
// try{
//     var a "there's no assignment operator here";

// }catch(arr){
//     console.log(Hi);
// }

console.log((10).toString(100));
