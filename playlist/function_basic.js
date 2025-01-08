function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

function loginUserMessage(username = "Rabi"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}