//a symbol represent a unique identifier
let sym = Symbol('id');
console.log(sym);

//symbol has hidden property eg:-

let id = Symbol('id for description');
let obj = {
    name:'rabi',
    age : 22
}
obj[id] = 11232737;
console.log(obj);

for(let mine in obj){
    console.log(mine); //in output the hidden propert is that it is only how the name and age
    
}
