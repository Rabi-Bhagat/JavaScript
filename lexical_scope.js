function fun(){
    var a = 199; //the lexical scope is that 
console.log("i am a function:" +  a );

function main(){
    // var a = 3;
    //the value of a ia 199 because the Lexical scope in JavaScript refers to the scope determined by the position of a function or variable within the code at the time of writing (not runtime).
    //Lexical scope allows inner functions to access variables from their outer function's scope (where they are written), ensuring proper variable visibility and behavior
    console.log("i am function inside the function:" + a );
    }

   main();
   }
  fun(); // we also call the function using function name. 