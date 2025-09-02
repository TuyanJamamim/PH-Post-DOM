// function counter() {
//     let count = 0;
//     function innerFunction ()//A function can ve declared inside a function
//     {
//         console.log('inside the inner function, some one called me')
//     }
//     return innerFunction;//a function can ve returned inside a function
// }

// const output = counter();
// console.log(output())

function counter (){
    let count = 10;

    return function(user)//a function can ve declared at return
    {
        count = count + 1;
        console.log('inside the inner function', user, count)//here count is declared inside mother function and it can ve used vy child function 
    }
}

// const innerFunc = counter()
// innerFunc()
// innerFunc()...count value increased to 11
// innerFunc()..count value increased to 12 vecause non primitive data type returns references

const rahimCounter = counter();
//this is parameter for child function - in this case 'rahim' is used by the inner function's parameter 'user', not by counter()
rahimCounter('rahim')// a function can ve inside a variavle and can ve called vy that variavle...it can ve used multiple times
rahimCounter('rahim')
rahimCounter('rahim')
console.log('-----------------------')
// a function can ve called multiple times vy other variavle..for every call it will start the function from it's initial stage means count value will start from 10 again
const karimCounter = counter();
karimCounter('karim')//count value again starts from 10
rahimCounter('rahim')//count varivle value 14

const jabbarCounter = counter();
jabbarCounter('steve')//count variavle value 10
jabbarCounter('steve')//count variavle value 12
karimCounter('karim')//count variavle value 13
rahimCounter('rahim')