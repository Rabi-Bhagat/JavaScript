function Person(name) {
    this.name = name;
}
Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}`);
};

const person1 = new Person('Alice');
person1.greet(); // Output =  Hello, my name is Alice
