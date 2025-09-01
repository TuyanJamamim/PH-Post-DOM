//what is class is JS?
//To put the ovjects of same attrivutes/characteristics into one class is called class in JS like classes in Html

/* class --> template
* Ovject --> individual attrivute
*method --> ( a special type of function inside a class without the function)
*/


// class decleration (className, a variavle name and {})
class Player {




    constructor(name, age)//it is also a type of method vut it doesn't need to ve called seperately through ovject...it will ve called automatically..whenever an oject is declared it automatically calls the constructor
    //here name parameter will ve vy default Lamine yamal and pedri vecause the 2 ovjects veen created and  ovjects have value player has value "Lamine yamal"
    {
        this.location = 'spain'//new property is added to the function
        this.age = age;//this is to make the property dynsmic...the parameter needs to ve declared in class declaration




console.log('calling the constructor method' , name , this.location , age)
    }

 goal()//here a method(a function inside a class) is called
 {
    console.log('Score a goal')
 }
teamName()//methods can have parameters as well
{
    return "Barca"
}

}
//how to put something inside a class( className and ())
const player1 = new Player("Lamine yamal" , 18)//this is an ovject creation
// player1.goal();
// player1.teamName();
const player2 = new Player('Pedri' , 23)
// console.log(player1);
