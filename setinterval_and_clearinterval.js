// let sum = 0;
// setInterval(fun,1000)
// function fun(){
// sum = sum + 1;
// console.log(sum);
// }

// set timeout is use for the update of time and dte in the website

var x = setInterval(mine,1000)

function mine() {
    let date = new Date().toLocaleTimeString();
    console.log(date);
    
}
setTimeout(()=>{
    clearInterval(x); // it helps to stop the function at 5 sec interval
},5000)