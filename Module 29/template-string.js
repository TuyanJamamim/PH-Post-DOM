const poem = `Amm pata jora jora 
marvo chavuk
chorvo ghora`//this is template string which returns as it is written insdie the tilt(``)   

function sum (num1 , num2){
    const total = num1 + num2;
    console.log("sum of " + num1 + " and " + num2 + " is " + total);
    //insted,
    const result = `sum of ${num1} and ${num2} is ${total}`//here the output will ve as it is written inside `` ..this template string makes the statement more dynamic
    console.log (result);
}

sum(10,20);//no console.log is needed if console.log is inside the function



const price = 50;
const discount = `Price after 20% discount is ${price * 0.8}`
console.log(discount);