// const nothing  = ['spiderman','Ironman',"captain america",'thor',"thanos"];
// const suppose = nothing.forEach((item) => {
//     console.log(item);
    
// })
// console.log(suppose);

// not:- foreach doesn't return the value

//filter() method is used to create a new array with all elements that pass a test provided by a function.
const number = [11,22,33,44,55,66,77];
// const name = number.filter((item) => item > 22) 
// const name = number.filter((item) => {
//     return item>22 //we also used or open  the scope in filter but there is the necessary of return 
// }) 
// console.log(name);

// foreach instead of filter 
// number.forEach((item) =>{
//     return item > 22
// })

let api = [
    { name: "Alice Johnson", age: 24, country: "United States", sex: "Female" },
    { name: "Liam Smith", age: 30, country: "Canada", sex: "Male" },
    { name: "Emma Brown", age: 35, country: "United Kingdom", sex: "Female" },
    { name: "Noah Wilson", age: 22, country: "Australia", sex: "Male" },
    { name: "Sophia Garcia", age: 29, country: "Spain", sex: "Female" },
    { name: "Mason Martinez", age: 35, country: "Mexico", sex: "Male" },
    { name: "Isabella Lopez", age: 32, country: "Argentina", sex: "Female" },
    { name: "James Anderson", age: 40, country: "South Africa", sex: "Male" },
    { name: "Mia Nguyen", age: 26, country: "Vietnam", sex: "Female" },
    { name: "Elijah Clark", age: 28, country: "New Zealand", sex: "Male" },];


    // const suppose = api.filter((api) => api.name == 'Liam Smith'); 

    const suppose = api.filter((api) => api.age == 35);
    // const suppose = api.filter((api) => api.name);
    ;
    console.log(suppose);
    
    
