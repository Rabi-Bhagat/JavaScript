// function call the function itself

// function recursion(n){
//     if(n <= 20){
//         console.log(n);
//         recursion(n + 1)
        
//     }
// }
// recursion(1)


//for factorial

function factorial(n){
if(n == 0){
    return 1;
}
  else{
    return n*factorial(n-1);
  }
    
}
console.log(factorial(4));
