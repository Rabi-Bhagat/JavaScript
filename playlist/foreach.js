//for each

const name = ['ironman','spiderman','strange','thor'];
// name.forEach(value => {
//     console.log(value);
    
// });
// name.forEach(function (value) {
//     console.log(value);
    
// })

name.forEach((item,index,arr) => {
    console.log(item,index,arr);//it is targeted to the item element and array
    
});