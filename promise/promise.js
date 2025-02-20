// const promiseone = new Promise(function (resolve,reject) {
//     //do and async task
//     //from here we call the DB , cryptography

//     setTimeout( function() {
//         console.log('async task is completed.');
//         resolve();
//     }, 1000);
// })
// promiseone.then(
//     function(){
//         console.log("promise consumed");
        
//     }
// )

// new Promise(function(resolve,reject){
//     setTimeout(function()  {
//         console.log("second time async is completed");
//         resolve();
        
//     }, 1000)

    
// }).then(function(){
//     console.log('async 2 is resolved');
// })


// const promisethree = new Promise(function(resolve,reject){
//     setTimeout(function()  {
//         console.log('Async is created');
//         resolve({username:"best",email:"rabibhagat789@gmail.com"});
//     }, 1000)
// });

// promisethree.then(function(user){
//     console.log(user);
    
// })

//promise four

const promisefour = new Promise(function(resolve,reject){
    setTimeout( function()  {
        let error = false
        if (!error)  {
            resolve({
                username:"rabi bhagat",
                password:"1234567890"
            })
        }else{
            reject('ERROR:STH NOT WORKING')
        }
        
    }, 1000);
})

promisefour
.then(function(user) {
    console.log(user);
    return user.username
    
})
.then((username) =>{
    console.log(username);
    
})
.catch(function(error){
    console.log(error);
    
})


