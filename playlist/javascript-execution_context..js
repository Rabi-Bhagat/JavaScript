//javascript execution context  

//cll stack

function one (){
    console.log("one");
    
}

function two (){
    console.log("two");
    
}

function three(){
    console.log("three");
    
}

//in inspect mode it is easy to understand in console through creating a file
one();
two();
three();
//it is as always normal function now we study about call stack function

function one (){
    console.log("one");
    two();
    
}

function two (){
    console.log("two");
    three();
    
}

function three(){
    console.log("three");
    
}

