class Person{
    constructor(name,age){
        // this -> {}
        this.name = name;   // this -> {name:name}
        this.age = age;     // this -> {age:age}
    }

    sayHello(){
        console.log(`Hello from ${this.name}`);
    }

    static staticHello(){
        console.log("Hello from static method");
    }
}

Person.staticHello();       // can only access static method through class name

class Student extends Person{
    constructor(name,age,batch,score){
        super(name,age) // we are invoking the constructor method of parent
        this.batch = batch;
        this.score = score;
    }
}

class Teacher extends Student{
    constructor(name,age,batch,score,classStrength){
        super(name,age,batch,score);
        this.classStrength = classStrength
    }
}

let person1 = new Person("Kajal","don't know");
// console.log(person1);
// let person2 = new Person("abc","234");
// person1.sayHello();
// console.log(person2);

// let student1 = new Student("Ganesh","don't know","july batch","10")
// student1.sayHello();
// console.log(student1)

let teacher1 = new Teacher("Alex","Don't know","Aug batch","10",100);
// console.log(teacher1);
// teacher1.sayHello();