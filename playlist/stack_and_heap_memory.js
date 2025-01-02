/*stack in used in primitive data types
heap is used in non-primitive data types 
*/

let a = "Rabi";
let b = a;
b = 'bhagat';

console.log(a);
console.log(b);
// stack call the opy value of overwriten the value
// (it gives the refernce)

let a1 = {
    name: 'aryan',
    age: 22,
};

// Assign a1 to b1
let b1 = a1;

// Update b1 with a new object
b1 = {
    name: 'sujan',
    age: 33,
};
