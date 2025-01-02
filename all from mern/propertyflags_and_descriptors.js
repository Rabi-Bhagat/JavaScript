// console.log('hello');

let emp = {};
emp.name = "battle";
console.log(Object.getOwnPropertyDescriptor(emp,"name"));

Object.defineProperty(emp,"age",
    {
    value : 21,
    writable:false,    
    configurable:false,
    enumerable : true
});

delete emp.age;

console.log(Object.getOwnPropertyDescriptor(emp,"age"));
