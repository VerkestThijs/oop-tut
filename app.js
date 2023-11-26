
//some terms you need to know 
//_________________________
//class: this is a blueprint of an object. just like in the real world you can keep using the blueprint. for instance with ONE blueprint of a house you can build many ACTUAL houses.
//defining a class: creating the blueprint
//instantiating an object : creating an actual object from the blueprint. in javascript this is done by using the 'new' keyword.
// constructor : when you instanciate an object aka use the new keyword  this method is being run. it is called a constructor because it constructs/creates the object. we can give it properties and can set these immediatly
//properties: these are field you set on a blueprint 




// here we instantiate the class person. remember how person only had 1 argument in it constructor therefor after the new keyword we only have to give one argument for the constructor to be able to make the class.
const abstractperson = new Person('thijs')
abstractperson.age = 25;
abstractperson.DeclareAge();
abstractperson.greet();
abstractperson.species();
abstractperson.bye();



const concretestudent = new Student('jeff','2nd grade');
concretestudent.age = 10;
console.log(concretestudent.age);
concretestudent.greet();
concretestudent.species();
concretestudent.study('coding');
concretestudent.bye();


// here we instantiate the student object, remember how student had 2 arguments in the constructor therefore we need to give 2 arguments as well when we create the class.
const nabilah = new Student('nabilah','1st grade uni');
nabilah.age = 34;

//as you can check above DeclareAge was never set in the student class. but remember everything defined in the Person class is accessible in the child class (INHERITANCE)
// this gives flexibility and less repeating of code as a huge advantage.
nabilah.DeclareAge();
nabilah.greet();
nabilah.species();
nabilah.study('visual coding');
nabilah.bye();

// just like with the nabilah object the thijs object also needs 2 arguments. however since there isn't a grade for the thijsobject, using the student blueprint shows bad design
// this shows the bad side of OOP and inheritance, you have to make sure that the objects you use are actually okay and therefore need a bit of thinking about the design of your classes
const thijs = new Student('thijs',null);
thijs.age = 31;
thijs.DeclareAge();
thijs.greet();
thijs.species();
thijs.study(null);
thijs.bye();



const thijsWorker = new SalarySlave('thijs','signpost',2);
thijsWorker.age = 31;
thijsWorker.saySenority();
thijsWorker.greet();
thijsWorker.growOlder();
thijsWorker.saySenority();


//please not how all the methods and properties all have the dot notation aka  they need to use the name of the instantciated object .  and then what property or  method you want to use

//you may ask why can i use const when i clearly changed something when i did for instance 'thijs.age = 31'. This is because the constant refers to the instanciated object, not the properties and methods.
//you don't really need to know this. as this has to do with how javascript stores values in the ram memory. just something to keep in mind.