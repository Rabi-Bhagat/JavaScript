//for of loop

let arr = [11,22,33,44,55,66];
for (val of arr){ 
    // console.log(val);
    
}

let welcome = "Hello dude ,How are you?";
for (const value of welcome) { //for of loop 
    //for(const element of object) ;//object is either string or array
    console.log(value);
    
}

//maps
//map() is an array method that creates a new array by applying a function to each element of an existing array. It does not modify the original array.

const mapping = new Map();
mapping.set('village','mohanpur');
mapping.set('country','Nepal');
mapping.set('age',22);
// console.log(mapping);
//applying for loop in map
for (const [key,value]  of mapping) {          
//  console.log(value);
console.log(key ,":",value); //destructing array

    
}

//for in used for object(for...in is used for iterating over the properties of an object, while for...of is used for iterating over iterable objects like arrays, strings, Maps, Sets, etc.)

const obj = { name: 'John',
     age: 25,
      country: 'USA' };

for (const key in obj) {
  console.log(`${key}: ${obj[key]}`);
}

