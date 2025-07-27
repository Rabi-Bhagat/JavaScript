//nested if :- if loop inside the if loop

let age = 13;
if (age >= 18) {
    console.log("you ARE ELIGIBLE for vote");
} else{
        console.log("you are not eligible for vote");
        
    }

//if-else
let a = 10;
let b = 10;    
if(a>b){
    console.log("a is grater");
    
}else if (b>a){
    console.log("b is grater");
}
else{
    console.log("c is grater");
}

//switch
// here is the switch case without default case or break case
let w = 2;
switch (w) {
    case 1:        
    console.log(" i am from 1");
    case 2:
    console.log(" i am from 2");
    case 3:
        console.log(" i am from 3");
    case 4:
        console.log(" i am from 4");


}

let r = 1;
switch (r) {
    case 1:
        console.log(" i  am from the default and break case of switch");;
        break;

    default:
        console.log(" i am from 1");
        break;
}