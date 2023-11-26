
// class keyword denotes that this is a class definition
class Person {
    //we say the class has a constructor of one property
    constructor(givenname) {
        // this references the class  in essence you are saying the property name of the class Persone is equal to the value of the argument givenname that the user gives in the constructor
        this.name = givenname;
    }
    age; //this is a property, to show that not all properties have to be set in the constructor. however if you want you can. you could see this as characteristic of the property  notice the absence of let or const.











    // get age(){
    //     return this._age;
    // }
    // set age(age){
    //     this._age = age;
    // }
    //these are methods. they are almost identical to functions. however note that you don't need the function keyword. these define what an object can do
    DeclareAge() {
        console.log(`I'm ${this.age} years old`);
    }

    greet() {
        console.log(`hello my name is ${this.name}`);
    }
    //this logic can be as simple or complex as you want
    bye() {
        console.log(`Bye from ${this.name}`);
        console.log("--------------------------------------------------");
    }
    species() {
        console.log(`I'm an abstract thing`);
    }
}
