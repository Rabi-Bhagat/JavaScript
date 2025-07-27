var map = new Map([[[1,"one"],
    ["fname",'Rabi'],
    ['whole number',[0,1,2,3,4,5,6,7,8,9]]]])

    console.log(map.get("fname"));

console.log(map);

console.log("2");

let map1 = new Map();
map1.set('fname','mickey')
console.log(map1);

//another example are:-

const num = [2,4,6,8,10];
const squarednum = num.map(num => num * num);

console.log(squarednum);
console.log(num);
