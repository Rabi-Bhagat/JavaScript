let promise = new Promise(function (resolve,reject) {
    alert("you are in the alert section");
    resolve(56);
})

console.log("aa gaya");

setTimeout (function () {
    console.log("this will be printing under 2 sec");
    
},2000)

console.log("ab dekhte jao" + " sirji");
console.log(promise);

