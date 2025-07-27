/*let arr= [5,10,15,20,25,30]

for( let a in arr){
    console.log(a); // in for in it gives the index of an array index of the array[like from 0 to ...]  
    
}

for( let a of arr){
    console.log(a); // it gives the value of an array 
    
}*/

/*let abc=[
    ["aryan",100],
    ["sujan",50],
    ['hirdent',25]
]
for( let i = 0; i<= abc.length ;i++ ){

    for(let j = 0 ;j<=abc[i].length; j++){
        console.log(abc[i][j]);
    }
}
    */
/*let abc=[
    ["aryan",100],
    ["sujan",50],
    ['hirdent',25]
]

abc.forEach((val) => {
    
    val.forEach((val) => {
        console.log(val);
        
    });
});
*/

let abc=[
    ["aryan",100],
    ["sujan",50],
    ['hirdent',25]
]
for(let arr of abc){
    for(i of arr)
    console.log(i);
    
}