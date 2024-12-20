//in a callback function we take a function as an argument
//callback functio is that a function callling the another function
function shutup(find){
    console.log(find);
    
}
function mine(a,b,callback){
let Sum = a+b;
 callback(Sum);

}

// console.log(mine(5,8));

mine(9,6,shutup)




