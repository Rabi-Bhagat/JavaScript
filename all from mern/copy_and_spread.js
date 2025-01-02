arr1=['aryan',2006,true];
arr2 = arr1;
arr1.push("the great");
arr1.unshift('me at 0 index');
arr2= arr1.slice(0).concat("i am  concat")
//concat is a method used to combine the array and string.

console.log(arr1);
console.log(arr2);

let abc= ['nepal','something',100];
let abc2 = [...abc];//spread operator
//this is spread syntax in js it is used for spreading and expandaing elements of san array.
abc.push('nepa is great');
console.log(abc);
console.log(abc2);
