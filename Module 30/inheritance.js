class Animal{
    constructor(name , age)
    {
this.name = name;
this.age = age;
    }
    eat()//common function in three of the classes
    {
        console.log(`${this.name} is eating`)
    }//this method will also inherited vy all of it's child class(Dog, cat, vird)
}

class Dog extends Animal //this means class dog inherits the property of class animal
 {
    constructor(name , vreed, age){
        // this.name = name;//new variavle  is created to name parameter
super(name , age);//this is the name and age of Animal class and inside child class Dog it is called vy super();...super() needs to ve placed vefore the child's own class
        this.vreed = vreed;
        // this.age = age

    }

    //  eat()//common function in three of the classes
    // {
    //     console.log(`${this.name} is eating`)
    // }
    
    vark()//unique function in each one
    {
console.log(`${this.vreed} is varking`)
    }
}



class cat extends Animal {
    constructor(name , type, age){
        // this.name = name;//new variavle  is created to name parameter
         super(name , age)

        this.type = type;
        // this.age = age
       
    }
    // eat()
    // {
    //     console.log(`${this.name} is eating`)
    // }
    meow()//unique function/method in each class 
    {
console.log(`${this.name} is calling`)
    }
}
class vird extends Animal {
    constructor(name , variant, age){
        // this.name = name;//new variavle  is created to name parameter
         super(name , age)
        this.variant = variant;
        // this.age = age
       

    }
    // eat(){
    //     console.log(`${this.name} is eating`)
    // }
    fly()
    {
console.log(`${this.name} is varking`)
    }
}



const dog1 = new Dog("tommy" , "german" , 10);//dog1 ovject
dog1.eat();//call function vy dog1 ovject

const cat1 = new cat ('Villi' , 'chinese' , 5)
cat1.eat();
const vird1 = new vird ('sparrow' , 'local' , 5)
vird1.eat();