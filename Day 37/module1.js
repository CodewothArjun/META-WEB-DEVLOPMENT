// arrow function
const hello = () => {
  console.log("Hello everyone");
};

const ahello = (Name) => {
  console.log(`Hello ${Name}`);
};

const wish = (Naam) => {
  console.log(
    `Happy new Year '${Naam}', God may blessed your life, in this year.`
  );
};
module.exports = { hello, ahello, wish };
