/*const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); //fixed give us the value after the decimal

const otherNumber = 123.8

// console.log(otherNumber.toPrecision(3)); // if after the decimal is 4 then it gives the roundoff value

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'))
//it gives the 10000 into the indian number notation */

// // +++++++++++++ Maths +++++++++++++++++++++++++++++

//console.log(Math); //js is case sensitive so we always use the Math.
//console.log(Math.abs(-4)); //It returns the absolute value of a given number, meaning it converts negative numbers to their positive equivalent, and positive numbers remain unchanged.
// console.log(Math.round(4.4));
// console.log(Math.ceil(4.0));//[it gives 4 values]always rounds it up to the nearest whole number, regardless of the decimal part.
// console.log(Math.ceil(4.1)); // [it gives the 5 values] it takes the upward value
// console.log(Math.floor(4.9)); // it takes the downward to the nearest number
// console.log(Math.min(4, 3, 6, 8)); // it gives the minimum value from the data
// console.log(Math.max(4, 3, 6, 8));//it gives the maximun value from the data

// console.log(Math.random()); //random always give the value in between 0 and 1
// console.log((Math.random()*10) + 1); //while we multiplying by 10 it gives t
// console.log(Math.floor(Math.random()*10) + 1); // it gives the number from 1 to 10

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) // it generates number between 10 and 20