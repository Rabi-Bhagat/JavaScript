//for current context we use .this keyword
/*
const visiter = {
    name : "Rabi",
    Country:"Nepal",
    notification:function (){
        console.log(`${this.name},"this is notified to the user"`);
        console.log(this);
        
    }
}
visiter.notification();
visiter.name = "spiderman";
visiter.notification();

console.log(this);
*/

// const stark =function marvel (){
//     let name = "ironman"
//     console.log(this.name);
    

// }

// we also create the function by this 
// let spiderman = () => {
//     let karma = "always repeat"
//     console.log(this.karma)
//     console.log();   
// }
// spiderman();

const average = (num1,num2) =>{
    console.log((num1+num2)/2);
    
}
// average(2,6);

//implicit return in array function [main man leta hu] this implicit gives a return value in one line or we dont need to write a function

const adding = (one,two) => (num1+num2)
//we should not write [return] when we  can't use curly braces
//we shouldn't write a return when we write a parasenthesis
// console.log(5,5);

const object  = (one,two) => ({name:"rabi"})
//we should wrap the object in parasenthesis 
console.log(object(2,4));
 