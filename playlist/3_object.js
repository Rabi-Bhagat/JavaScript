/* //all about singleton
 //const user = new Object(); // this is a singletion object
const user = {}
//  console.log(user); // it gives the empety object

 user.id ="123abc";
 user.name = "Raavan";
 user.query ="true";
//  console.log(user);
 
const myuser = {
    email : 'rabibhagat789@gmail.com',
    fullname:{
        name : {
            firstname: "Rabi",
            lastname : "Bhagat",
        }
    }
}
console.log(myuser.fullname.name.firstname);
console.log(myuser.fullname.name.lastname);
*/

 let obj1  = {
    name:"rabi Bhagat",
    age:"22",
    country:"nepal",
 }

 let obj2  = {
    name:"Aryan Jha",
    age:"23",
    country:"nepal,janakpur",
 }
//  obj3 = {obj1,obj2};
obj4 = Object.assign({},obj1,obj2); //[here is the ({},object,source)]
//  console.log(obj4);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email;
console.log(users[1].email); // this is acessing by the id of the object users



console.log(Object.keys(obj1)); //this is acessing the key of the object
console.log(Object.values(obj1));//this is acessing the vakue of the object
console.log(obj1.hasOwnProperty('age')); //this gives true when the item in present in the object 
console.log(obj1.hasOwnProperty('isloggedin'));//
