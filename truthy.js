/*const value = NaN;
if (value) {
    console.log("i have value");
    
}
else{
    console.log("i dont have a value");
}

//truthy values
//"0",'false," ",[],{},function(){}

//falsy values
// false,0,-0,BigInt,0n,"",undefined,NaN

//nullish coaleacing opreaator(??) : nul undeefined*/

let vall;
// vall = 5 ?? 10; //output 5
// vall = null ?? 10; //output 10
vall = null ?? 10 ?? 20 ; //output 10
console.log(vall);

///terniary operator

const price = 6000;
price >= 5000 ?console.log("more than 5000") : console.log("grater than 5000");
;
