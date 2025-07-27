let arr = [
   {user:1,name:"rabi"} ,
   {user:2,name:"aryan"} ,
   {user:3,name:"sujan"} 
]
// console.log(arr[0]);
//this loop is used to print the index of an arr.
for(let i in arr){
    console.log(i);
    
}
//thid loop is used to print the element  of an array. 
for(let i in arr){
    console.log(arr[i]);
    
}
//for printing the name we use the loop in i for name i.e:-
for(let i of arr){
    console.log(i.name);
    
}
let [item1,item2] = arr;
console.log(item1);
console.log(item2);
