//{} curly braces is known as scope

// this is global scope means we can acess the value which is acessible inside or outside thr scope 
var b = 111;
let a = 333;

// in the curly braces is blockk scope
 if (true){ //means it alwayes pass through the loop

    let a = 30;
    var b = 22;
    const c = 33;
   //  console.log(a);
    
 }

//  console.log(a); //we can't acess the value of let outside the scope
//  console.log(b); //we can easily acess the value of var outside the scope so the var is not in used and it create a lot of problems further 
//  console.log(c);
//  console.log(a);
 
 //nested function
/*
 function first(){
   const myname = "Rabi";

   function second (){
      const lastname = "Bhagat";
      console.log(myname);
      
   }

   // console.log(lastname); //here is the error occur deu to we can't acess the lastname otuside the scope
   
   second();

 }

 first();
 */
/*
 function aryan(){
   const country = 'Nepal';

   function man(){
      const district = "  dhanusha";
      console.log(country + district);
      

   }
   man();

 }
 aryan();
*/

function adding(numm){
   return numm +1
}
console.log(adding(2));