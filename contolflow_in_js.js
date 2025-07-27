//if else
const value = 50;
if(value>20){
    console.log("i am grater than 20");
    
}

else{
    console.log("i am smaller tham 20");
    
}

//implicit scope (run the code in one line )
const paisa = 10000;
if(paisa >5000) console.log("your paisa is grater than 5k");

//nested if else

const taka = 1000;
if(taka > 500){
    console.log("your taka is grater than 500");
    
}
else if(taka>750){
    console.log("your taka is grater than 750");
    
}
else{
    console.log("your taka isless than 50");
    
}

// switch
const mean = 3;
switch(mean) {
    case 1:
        console.log("i am  in 1 jan ");
            break;
        
    case 2:
    console.log(" i am from 2");
    break;
    case 3:
        console.log(" i am am from 3");
        break;
    default:
        console.log("i am default case");
        
        
    }