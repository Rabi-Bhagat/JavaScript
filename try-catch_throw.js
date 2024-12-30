//try, catch and throw

function divide(a,b){
    try{
        if (b == 0){
            throw new Error(" the nmbr can`t divide with 0")
            
        }
        else{
            console.log('i am the else part of the try statment');
            return a/b;
            
        }
    }catch(err){
        console.log(err.message);
        
    }
}
divide(5,0);
console.log(divide(8,1));
console.log(err.message);