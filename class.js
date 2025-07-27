class person{
    constructor (name,age){
    this.name = name;
    this.age = age;

}
greet(){
    console.log('wassup ${this.name}');
    
}
}
let user = new person ('john',10)
user.greet();
console.log(user);

/* class :-
use the keyword class to create class
always add a method named constructor

syntax :-
class classname{
constructor(){
.............
}
}
*/