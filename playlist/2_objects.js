//singleton

//object literals
// add a as a key in object

const smbl = Symbol("key1");

const user = {
  name: "Rabi",
  [smbl]: smbl, // Assign the symbol itself
  age: "22",
  email: "rabibhagat789@gmail.com",
  study: "B.tech",
  "country": "nepal",
};
/*
console.log(user.age); // Outputs: "22"
console.log(user['age']); // Outputs: "22"
console.log(user["country"]); // Outputs: "nepal"
console.log(user[smbl]); // Outputs: Symbol(key1)
console.log(typeof user[smbl]); // Outputs: "symbol"
*/


//function

user.greeting = function(){
    console.log('this is greeting ');
    
}
console.log(user.greeting());
console.log(user.greeting);

user.greetingtwo = function(){
    console.log(`this is greeting ,${this.country}`);
    
}
console.log(user.greetingtwo());
console.log(user.greetingtwo);
