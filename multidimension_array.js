/*//multidimensional array
let arr = [
    ["sujan",100],//it is lies on 0 index
    ['aryan',20],//it is lies on 1 index
    ['hirdent',40]//it is lies on 2 index
]
console.log(arr);
console.log(arr[1][0]);

arr.forEach((data) =>{
data.forEach((val) =>{
    console.log(val);
    
})
});
*/
let obj = {
    "name" : "Rabi",//this is good practice of writing the object in inverted comma
    "age":20,
    "last name": "bhagat",
    fun: function(){
        console.log("hey! dude i am function of the object");
        
    },//this is a function and we also call the function 

    //creating an array inside the object
    arr :["hustle",'brave','i am the best']
}
console.log( obj.name);
console.log(obj["last name"]);
console.log(obj["last name"]);
console.log(obj.fun);
console.log(obj.arr);

