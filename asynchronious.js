// js is synchronious
/*Asynchronization in JavaScript allows tasks to run in the background without blocking the main thread, enabling the program to handle other tasks simultaneously.
 It’s essential for operations like fetching data, waiting for timers, or responding to events
 */
//for asynchronious we use the settimeout ()
//function

setTimeout(fun,4000)

setTimeout(() => {
    console.log(' i am at a last index of  asynchronious output');
    
}, 6000);

console.log('i am a ');

function fun(){
    console.log('asynchromious i am ata 3rs index due to asynchronious');
    
}
console.log('at a second index');
//   fun();



