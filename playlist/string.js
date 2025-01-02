let name = 'rabi';
let lastname = 'bhagat';
console.log(`hello!! \n i am ${name} ...${lastname}`);
console.log(name[1]);

console.log(name.length);

console.log(lastname.__proto__);

// console.log(lastname.toUpperCase());

 let mine = "Important";
//  console.log(mine.substring(1,4));
 // it takes starting index of values and at the last of index -1
//  console.log(mine.slice(5,-1));
//  negative slice takes the value from negative side
 
// trim always remove the space of starting and ending
// const z = "  i am space  ";
// console.log(z.trim());
let link = "https://fantastic-tribble-wr7wwg44j5xp3g6qj.github.dev/";
console.log(link.replace('dev','com'));
// we also find the string  from the variable
console.log(link.includes('fantastic')); // this give true output
let split = "consistency is the key";
let rdj = split.split(" "); // Split by space
console.log(rdj);

