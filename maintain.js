// Creating Arrays
let fruits = ["apple", "banana", "cherry"]; // Array literal
let numbers = new Array(1, 2, 3, 4); // Array constructor

// Accessing and Modifying Elements
console.log(fruits[0]); // "apple"
fruits[1] = "blueberry"; // Modify element
console.log(fruits); // ["apple", "blueberry", "cherry"]

// Adding and Removing Elements
fruits.push("orange"); // Add to end
fruits.pop(); // Remove from end
fruits.unshift("kiwi"); // Add to beginning
fruits.shift(); // Remove from beginning
console.log(fruits); // ["apple", "blueberry", "cherry"]

// Finding Elements
let index = fruits.indexOf("blueberry"); // 1
let hasCherry = fruits.includes("cherry"); // true
console.log(index, hasCherry); // 1 true

// Iterating Over Arrays
fruits.forEach(fruit => console.log(fruit)); // Logs each fruit

// Transforming Arrays
let upperCaseFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(upperCaseFruits); // ["APPLE", "BLUEBERRY", "CHERRY"]

// Filtering Arrays
let filteredFruits = fruits.filter(fruit => fruit.length > 5);
console.log(filteredFruits); // ["blueberry"]

// Sorting Arrays
fruits.sort();
console.log(fruits); // ["apple", "blueberry", "cherry"]

// Joining Arrays
let fruitString = fruits.join(", ");
console.log(fruitString); // "apple, blueberry, cherry"

// Slicing and Sp
