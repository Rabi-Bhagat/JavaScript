// IFEE stands for imideately invoked function expression

// function ironman (){
//     console.log("i love you 3000 times");
    
// }

// ironman();

// this is named IFEE because we give the name for a function i.e ironman
(function ironman (){
    console.log("i love you 3000 times");
    }) ();//use semi colon to end or stop the function
     //adding the end this emmidately invoked the function

//this is unnamed IFEE 

    ( (name) => { // er declsre the parameter
        console.log(`i love you 3000 times ${name}`);
        }) ("Pepper Pots") // we give the value of key or name
    // this function also runs 