//rest  or spread operator

/*
function appleprice(...num1){// [...num1]this is rest
    return num1;
}
console.log(appleprice(200,400,600,800));

const price = [11,22,33,44,55,66];

*/


// function start (parameter){
//     return parameter[2];
// }
    
// console.log(start(price));

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})
