//singleton

//object literals
// add a as a key in object

const smbl = Symbol("key1");

const user = {
name: "Rabi",
[smbl] : "mine",
age:"22",
email:"rabibhagat789@gmail.com",
study:"B.tech",
"country":"nepal",

}
console.log(user.age);
// console.log(user[age]); // take this age as a string
console.log(user['age']);
console.log(user["country"]);
console.log(user[smbl]);
