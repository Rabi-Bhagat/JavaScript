/*let  a =["aa","bb","cc"];
console.log(a);
//we also indexing in array and the indexing is start from always 0

let s = ['todo','hustle','and','comeback','getup','do anything'];
console.log(s[1]);
console.log(s[2]);
console.log(s[3]);
//we aklso finding the length of of the array by:-
console.log(s.length);//length always start from 1

// if we want to push the item in array then we used 
// ... . ..("..");
let d = ['comeback','just do it','patience','hustle'];
/*d.push("kux toh krle");
//push is used to add the element in last index in array
d.unshift("main age rahunga");
//push is used to add the element in first index in array*/
// d.splice(1,1);
// d.splice(1,0,"mayalu");
// console.log(d);

// let z= [10,2,15,20,25,30,35];
// let q=[3,6,9,12,15,18,21];
/*for (let i = 0; i < z.length; i++) {
    console.log(z[i]);
   //also we used  the for loop for printing the element  in horizantol line using the foor loop
    
}*/
/* For each loop
z.forEach((value,index,arrary)  => {
    console.log(value,index,arrary)
    
});
*/

/*//concat propertyis used to add the element of two differ array
console.log(z.concat (q));

//reverseproperty
console.log(z.reverse());
//sort method
// let e =z.sort(); or we using the another variable for usinf sort property

console.log(z.sort());

let num=[2,4,6,8,10];
let y = num.slice(1,4);//it prints the num from 1 to 4
let r=num.splice(1,4);//it removes the num from 1 to 4.
console.log(y);
console.log(num);
*/

//filter method

// let num3 =[5,10,15,20,25,30];
// let u= num3.filter((val,indx,array) => {
//     if (val >=15 && val <= 25) {
//         return val;
//     }
// })
// console.log(u);
let mine = [5,10,15,20,25,30];
let i= mine.findIndex((value) =>{
    return value == 10
})
console.log(i); 

//for in or foroff method
let arr=[1,2,3,4,5,6,7,8,9,10];
for(let ar of arr){
    console.log(ar)
}