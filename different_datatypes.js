/*generally data types are in 2 types they are:-
 1. primitive , they are:-
 a. number
 b. string
 c.boolean
 d.null
 e. undefined
 f.symbol
 g. bigint

 2.non-primitive(reference)
 a. object
 b. array
 c. function
*/

// const id = Symbol("rabi");
// const id2 =Symbol("rabi");
// console.log( id === id2);

//here is the example of symbols

// const id = Symbol("rabi");
// const id2 =Symbol("rabi");
// console.log( id === id2);

// const a = 2348567483924n; //we make an int in big int by adding the n at the last of the n
// console.log(typeof a); //the output is the bigint

//array
let arr =["ironman","spiderman","thor"];

//object
let obj = {
    name:"Rabi prasad bhagat",
    age:"22",
}

const fun = function(){
    console.log("I am The Best");
    
};

console.log(typeof arr);//arrays are a type of object.
console.log(typeof obj);
console.log(typeof fun)  ;


