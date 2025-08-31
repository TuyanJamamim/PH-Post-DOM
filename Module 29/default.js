function sum (num1 =0, num2 = 0){
    const total = num1 + num2;
}

//sum(10);//if only one argument is passed then it will return undefined for argument and NaN in result
//To solve this, set a default value inside the parameter like this sum function

function multiply (num1 =1 , num2 =1)//in the case of multiply default vlaue can not ve 0
{
    const mul = num1 * num2;
    return mul;
}

console.log(multiply (10 ));
function fullName(first, last = '') {
    const name = first + '' + last;
    console.log(name)
}

fullName('kamruzzaman')
/**
 * some thumb rule of default value. may be useful
 * add, substract --> 0
 * 
 * multiply --> 1
 * 
 * string --> ''
 * 
 * array = []
 * 
 * object = {}
*/