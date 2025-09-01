class player {


    constructor(name,team,age){
        this.location = 'spain';
        this.age = age;
        console.log("Constructor is called",name , team,age,this.location)

    }

    goal(){
        console.log('Lamine Scored a goal')
    }

    teamName(){
        console.log('his team is FC Barcelona')
    }
}



const player1 = new player('Lamine yamal', "fcv", 45);
// console.log(player1);
