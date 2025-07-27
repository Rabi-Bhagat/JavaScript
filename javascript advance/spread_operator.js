// const arr1 = [1, 2, 3];
// const arr2 = [4, 5];

// // Combine two arrays
// const combined = [...arr1, ...arr2]; 
// console.log(combined); // [1, 2, 3, 4, 5]


const a= [1,2,3,4,5,6];
const b = [7,8,9];

const spread_operator = [...a, ...b]
console.log(spread_operator);


//in objects

const user = { name: "Rabi", age: 20 };
const address = { city: "Kathmandu", country: "Nepal" };

// Merge two objects
const profile = { ...user, ...address };
console.log(profile);
// { name: "Rabi", age: 20, city: "Kathmandu", country: "Nepal" }


let add = (a,b ) =>{
console.log(a + b);

}

add(3,2);