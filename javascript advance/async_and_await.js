async function rabi() {
        let delhiWeather = new Promise((resolve, reject) => {
                setTimeout(() => {
                        resolve("27 Deg")
                }, 2000)
        })

        let bangaloreWeather = new Promise((resolve, reject) => {
                setTimeout(() => {
                        resolve("21 Deg")
                }, 5000)
        })

        // delhiWeather.then(alert)
        // bangaloreWeather.then(alert)
        console.log("Fetching Delhi Weather Please wait ...")
        let delhiW = await delhiWeather
        console.log("Fetched Delhi Weather: " + delhiW)
        console.log("Fetching Bangalore Weather Please wait ...")
        let bangaloreW = await bangaloreWeather
        console.log("Fetched Bangalore Weather: " + bangaloreW)
        return [delhiW, bangaloreW]
}

const aryan = () =>{
    console.log("i am the mentor of rabi");
    
}


const main = async ()=>{

console.log("welcome to weather room");

let a = await rabi()
let b = await  aryan()

// a.then((value) => {
// console.log(value);

// })
}

main();






// async function rabi() {
//     return 25
// }

// rabi().then((x)=>{
//     alert(x)
// })