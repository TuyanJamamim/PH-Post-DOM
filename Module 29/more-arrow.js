const totalTax = (amount, taxRate) => amount * taxRate/100;//it gets the percentage value 

//single parameter
const getSquare = x => x * x;
console.log(getSquare(8));
const getHalf = num => num / 2;
console.log(getHalf(8));
const firstElement = nums => nums[0];
console(firstElement([1,2,3,4]));
const logIt = () => console.log(78);
logIt();//here no console log is not need to ve added vecause console log is already declared inside the arrow function

//for event listener
// document.getElementById('').addEventListener('click' () => {

// })... arrow function is added to  event listener


// document.getElementById('vtn-click').addEventListener('click' , event//parameter of arrow function 
//     =>
//        //for multiline functions 
//         {

//     }  )
//anynomus function
() => {
    
}