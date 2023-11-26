// the extends keyword shows that the class here student will also have all the properties and methods that were defined in the person class. this is whats called inheritance
class Student extends Person {
    //here we call the constructor agang
    constructor(name, grade) {
        //since this is a child class we need to tell the computer that the name property can be found in the parent class(person) and we don't have to manually set it again
        super(name);
        this.grade = grade;
    }

    // like we said above, since we defined this class as a child class from the Person class we inherited all its properties and method. therefore we don't have to redefine them, note the missing age property and the missing declareAge and bye methods
    //however if we use the method again we can do what is called overriding. the greet class would nomally do 'console.log(`hello my name is ${this.name}`);' as seen in the person class.  but for the student class we want it to do something else, hence we override the method
    greet() {
        console.log(`sorry, can't talk i have to study`);
    }
    species() {
        console.log(`i'm a human and this is my name ${this.name}`);
    }

    // ofcourse the child class can have it owns properties and functions    
    study(course) {
        if (!course) {
            console.log(`WTF you're not a student!`);
        }
        else {
            console.log(`fuck i have to study ${course}`);
        }
    }
}
