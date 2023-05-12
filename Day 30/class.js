// oops main components are class,object,inheritance,polymorphism,abstraction,encapsulation
// In this lesson we are exploring only class
/*
Now, what is class ? : class is a template for the javascript object
for example, while we are going to open a bank account, then we need to fill a form. which is same for all, it can be compare with class, class is also like a template. And the form is filled through methods, then that is object
*/

// creating a class
class globalaccount {
  takingInfo(name, contact, address) {
    this.name = name;
    this.contact = contact;
    this.address = address;
  }

  submit() {
    console.log(
      `${this.name} has been successfully created. \n your more details are: Your are from ${this.address} and contact number is ${this.contact}.`
    );
  }

  cancel() {
    console.log(`${this.name} is cancelled, Please contact near branch.`);
  }

  check() {
    console.log(`${this.name} is aviable in our records.`);
  }

  ATM() {
    console.log(`${this.name} ATM is in the process`);
  }
}

// invoking an object using new keyword
// person 1
var person1 = new globalaccount();
person1.takingInfo("Arjun", "98676765716", "Anamanagar");
person1.submit();
person1.ATM();

// person 2
var person2 = new globalaccount();
person2.takingInfo("Sitaram", "9862594781", "Baneshwor");
person2.submit();
person2.ATM();

// person 3
var person3 = new globalaccount();
person3.takingInfo("Sarina", "9862299781", "Shantinagar");
person3.submit();
person3.cancel();
