// function greet(name, callback) {
//   console.log("Hi " + name);
//   callback();
// }

// function sayBye() {
//   console.log("Bye!");
// }

// greet("Rabi", sayBye);



//this is a synchronous
// let a = prompt("what is your name:");
// let b = prompt("what is your age:");
// let c = prompt("what is your fav color:");
// let d = prompt("what is your fav movie:");

// console.log(a = "is " + b + "years old has" + c + "fav color" + d + "fav movie");;



//this is asynchronous
// setTimeout(function () {
//     console.log("Abb rokk ke dekhao");
    
// }
// ,3000)

// console.log("pahle main consistent banunga");


//callbacks

function loadscript(src,callback) {
    var script = document.createElement("script");
    script.src = src;
    script.onload = function() {
    console.log("Loaded script with SRC: " + src)
    callback(src);
  }
     document.body.appendChild(script);
}

function hello(error, src) {
  if (error) {
    console.log(error)
    return
  }
  alert('Hello World!' + src);
}

loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js",hello) 