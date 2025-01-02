//simple function in js:-
function mine (){
    console.log("i am the best ");
}
//calling the function
mine();

//function wit parameter:-

function hustle (a) {
    console.log("i am a paramerer of a from a hustle fuction " + a );

}
// calling the function with a parameter
hustle( "welcome ");

console.log("example of adding two number with a function:-");

// here is the adding function of two number.
function add(a,b){
    console.log(a+b);
    
}
add(2,3);

//local and global variable:-
console.log("here i the example of local and global variable:-");

let x = 5; //this is a global variable
function doit(){
    let b = 10;//here b is the local variable.
    console.log(b);
    
}
doit();
console.log(x);//here x is the global variable
/*console.log(b); // this shows the error becuse i assign b as the local variable*/


/* in js there are different types of function :-
a. Anonymous function
b.arrow function etc
*/
console.log("here is the example of annonymous function-");
 let z = function(){
    console.log("hello duniya");
 }
 z();


 console.log("arrow function:-");
 //arrow function
 
let c =(a,b) => {
    return(a-b);
}
console.log(c(3,2));

//
let r = (w,q) =>{
    return (w+q);
}
console.log( r(99,22));
//

console.log("here is the easy way to make a easy eay of delcaring a function:-");
//i.e:-
let s = (f,g) =>console.log(f/g);
s(1005,5);


