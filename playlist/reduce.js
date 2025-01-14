//reduce.js
const number = [1,2,3,4,5];
const suppose = number.reduce(function(accumulator,currentvalue){
    console.log(`accumulator value is : ${accumulator} and the current value is ${currentvalue}`);
    
    return accumulator + currentvalue
},0) // 0 is the  inital value
console.log(suppose);
