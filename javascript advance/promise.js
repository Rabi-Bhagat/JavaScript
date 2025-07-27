// let promise = new Promise(function (resolve,reject) {
//     alert("you are in the alert section");
//     resolve(56);
// })

// console.log("aa gaya");

// setTimeout (function () {
//     console.log("this will be printing under 2 sec");
    
// },2000)

// console.log("ab dekhte jao" + " sirji");
// console.log(promise);


let r1 = new Promise((resolve,reject)=> {

    console.log("the promise is pending");
    
setTimeout(() => {
    console.log("promise is fullfill under the five second");
    

    resolve(true)
    // reject(new Error("i am an error"));
    
}, 5000)
})

let r2 = new Promise((resolve, reject) => {
        console.log("Promise is pending")
        setTimeout(() => {
                // console.log("I am a promise and I am rejected")
                reject(new Error("I am an error"))
        }, 5000)
    })



    //to get value
//     r1.then((value) => {
//         console.log(value)
// })


//to catch error
// r2.catch((error) =>{
//     console.log("some error occur in r2")
    
// }
// )

r2.then((value) =>{
    console.log(value)  
}
,(error) =>{
    console.log(error);
    
})