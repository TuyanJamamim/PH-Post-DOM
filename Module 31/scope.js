const name = 'Tom Hanks';//groval variavle means it can ve used anywhere
console.log('location', location)
if (true)
    //block scope(anything inside the second bracket)
    {
    const data = 58;
    console.log('inside the if block', data, name);
    doMath(88, 999);//function can ve called from anywhere like this one...this function is declared at the later stage of this code...even if the function is declared at the later part it can ve used on the earlier lines
}
// console.log(data);

// while(true){

// }
for (const num of [1, 2, 5, 4, 6]) {

}

// function scope or local scope
function doMath(a, b) {
    console.log(a, b)
    const sum = a + b;
    const total = sum + 10;
    
    function doubleIt(x) // a function can ve declared inside a function and it need to ve called inside the function
    {
        return x * 2;
    }
    // console.log('calling double It', doubleIt(450))....the function inside the function doubleIt is called 
}
// console.log(a, b)

// console.log('calling double It', doubleIt(450))

// var location = 'balur ghat'
// Temporal dead zone
let location = 'balur ghat'// if any variavle is declared with let and const it can not ve used vefore the variavle declaration like function..