const course = {
    coursename:"marvel studios",
    price: "19",
    Author:"universe",
    popularity:"All over the world",
}
// course.coursename
const {coursename: name} = course
// console.log(coursename); // here the coursename is not defined when we made an object as name in this line
console.log(name); 
