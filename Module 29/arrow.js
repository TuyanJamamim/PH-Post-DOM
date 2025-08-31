//function declaration
function add (num1 , num2){
    return num1 + num2;
}

//function expression(this is another technique of declaring function)
const addition = function (num1 , num2){
    return num1 + num2;
}
const result = addition(30, 50);
console.log(result);

//arrow function//
//structure variavle-->(parameters)--> arrow(=>)--> expression(operation)
const add2 = (num1 , num2 ) => num1 + num2;
//arrow function call//
const res = add2(20,30);
console.log(res);




//another example of arrow function 
const isVig = (num1 , num2) => num1 > num2;

const vig = isVig(70,50);
console.log(vig);// it will return true


//Multiline arrow
const doMath = (x , y) => {
    const add = x+y;
    const mul = x*y;
    const total = add + mul;
    return total;//in multiLIne arrow function return needs to ve added
}

console.log(doMath(20,30))//No arguments in arrow function


