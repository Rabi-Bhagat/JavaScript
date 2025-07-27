// const fruits = ["apple", "banana", "mango"];


// const a = fruits[0];
// const b = fruits[1];

// console.log(a);


// ES6 way
// const [first, second,thirds,fifth] = fruits;
// console.log(first);  
// console.log(second); 
// console.log(thirds); 
// console.log(fifth); 


// let success = ["consistency" , "positive thought" , "disciplined"];



// let[first] = success;
// console.log(first);

// console.log(last);

// let last  = success[success.length-1];
// console.log(last);


//object

// const user = {
//   name: "Rabi",
//   age: 20,
//   country: "Nepal",
//   passion:"coder"
// };
// Old way
// const name = user.name;
// const age = user.age;

// console.log(name);

// ES6 way
// const { name, age, country,passion } = user;
// console.log(name);   // Rabi
// console.log(age);    // 20
// console.log(passion);


function greet({ name, age }) {
  console.log(`Hello ${name}, age: ${age}`);
}

greet({ name: "Rabi", age: 20 });








function future(car,date) {
    console.log(`My future car is  ${car} till date ${date}`);
    
    
}

future({car:"lamborgini countach",date : 2030});