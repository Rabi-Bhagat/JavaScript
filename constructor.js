// in a constructor we used new  
/* constructor is a special function used to initialize and create objects .
it is typically used with a class or constructor functions to set up the initial stage of an object when it is created.
    1. they are named withh a capital letter first 
    2.they should be executed only with a  new operator. 
*/

function user (name){
    this.name = name;
}
let person = new user ('johny');
console.log(person.name); // ouptput is johny

    