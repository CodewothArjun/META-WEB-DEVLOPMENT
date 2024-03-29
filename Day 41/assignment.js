// const dishData = [
//   {
//     name: "Italian pasta",
//     price: 9.55,
//   },
//   {
//     name: "Rice with veggies",
//     price: 8.65,
//   },
//   {
//     name: "Chicken with potatoes",
//     price: 15.55,
//   },
//   {
//     name: "Vegetarian Pizza",
//     price: 6.45,
//   },
// ];
// const tax = 1.2;

// // Implement getPrices()
// function getPrices(taxBoolean) {
//   for (menu of dishData) {
//     let finalPrice;
//     if (taxBoolean == true) {
//       finalPrice = menu.price * tax;
//     } else if (taxBoolean == false) {
//       finalPrice = menu.price;
//     } else {
//       console.log("You need to pass a boolean to the getPrices call!");
//       return;
//     }
//     console.log(`Dish: ${menu.name} price:$${finalPrice}`);
//   }
// }

// // Implement getDiscount()
// function getDiscount(taxBoolean, guests) {
//   getPrices(taxBoolean);
//   if (typeof guests === "number" && guests > 0 && guests < 30) {
//     let discount = 0;
//     if (guests < 5) {
//       discount = 5;
//     } else if (guests >= 5) {
//       discount = 10;
//     }

//     console.log("Discount is: $" + discount);
//   } else {
//     console.log("The second argument must be a number between 0 and 30");
//   }
// }

// // Call getDiscount()
// getDiscount(true, 2);
// getDiscount(false, 10);

// Given code
const dishData = [
  {
    name: "Italian pasta",
    price: 9.55,
  },
  {
    name: "Rice with veggies",
    price: 8.65,
  },
  {
    name: "Chicken with potatoes",
    price: 15.55,
  },
  {
    name: "Vegetarian Pizza",
    price: 6.45,
  },
];
const tax = 1.2;

// Implement getPrices()
function getPrices(taxBoolean) {
  for (d of dishData) {
    // don't use in // use let d of dishData
    var finalPrice;
    if (taxBoolean == true) {
      finalPrice = tax * d.price;
    } else if (taxBoolean == false) {
      finalPrice = d.price;
    } else {
      console.log("You need to pass a boolean to the getPrices call!");
      break;
    }
    console.log("Dish:", d.name, "Price: $" + finalPrice);
    // console.log(`Dish: ${d.name} Price: ${finalPrice}`);
  }
}

// Implement getDiscount()
function getDiscount(taxBoolean, guests) {
  getPrices(taxBoolean);
  var condition = typeof guests == "number" && guests > 0 && guests < 30;
  if (condition == true) {
    var discount = 0;
    if (guests < 5) {
      discount = 5;
    } else if (guests >= 5) {
      discount = 10;
    }
    console.log("Discount is: $" + discount);
  } else {
    console.log("The second argument must be a number between 0 and 30");
  }
}
// Call getDiscount()
getDiscount(true, 2);
// getDiscount(false, 10);
