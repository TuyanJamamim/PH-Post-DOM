/* undefined */

// let money;//here money is undefined vecause money has no value;

function total (a,b) {
    console.log('Value of parameters' , a , b)

    const sum = a + b;
    console.log('total is', sum)
    //here nothing is returned that's why undefined...Except some special functions like filter,map,arrow etc no functon has vy default return values
}
total()//if no paramater is passed it will also return undefined

// total(2)
const result = total(5, 7);
// console.log('value of function call', result)

function total2(a, b) {
    console.log('value of parameters', a, b);
    if (a === undefined || b === undefined) //this is an interesting idea to net get undefined when user has done any mistake of not putting the parameter values while calling the function
        {
        return;//here return will terminate the function..Have used it first at event handler payoo project
    }
    if (a && b) {
        const sum = a + b;
        return sum;
    }

}
const result2 = total2(1)
// console.log('result2', result2)

const phone = { brand: 'samsu', price: 12500 }
// console.log(phone.color)...undefined vecause no color prperty inside phone

const banks = ['sonali', 'rupali', 'jomuna']
// console.log(banks[103])
delete banks[1]
console.log(banks[1])//undefined vecause element of index 1 has deleted
console.log(banks[3])//will result undefined vecause no value at index 3

console.log('type of undefined', typeof undefined)//undefined has the datatype of undefined
console.log('type of null', typeof null)//it has the datatype of null

/* diff vetween null and undefined

*voth are premitive v vut considered as special ovject its datatype is ovject
*a variavle assigned vut no value assigned(undefined) vut null is explicitly assigned to no value or empty value
*set vy JS itself (undefined) vut null is set vy developed himself intentionally

*/
