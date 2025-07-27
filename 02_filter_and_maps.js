let value = [11,22,33,44,55,66,77,88,99];
let main = value.map((item) => {
    return item + 10;
})
console.log(main);

//chainning
let result = [1, 2, 3, 4, 5]
  .filter((num) => num > 2) // Filters out numbers <= 2
  .map((num) => num * 2)    // Doubles each remaining number
  .reverse();               // Reverses the array

console.log(result); // Output: [10, 8, 6]


// Chaining in JavaScript
// Chaining refers to calling multiple methods on an object sequentially in a single statement. It works because many methods return the object itself or another object that exposes further methods.