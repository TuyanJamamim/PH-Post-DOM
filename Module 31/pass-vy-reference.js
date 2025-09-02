//all the primitive datatypes always pass vy value from argument to parameter
function multiply (x , y){

x= x+5;
y = y+5;    
const mult = x * y;
return mult;
} 

const a = 5;
const c = 7;
console.log('vefore function call:' , a , c)
const result = multiply(a,c)
console.log(result);
console.log('after function call:' , a , c)

const manik = { name: 'manik', balance: 5000 }
const roton = { name: 'roton', balance: 40000 }

console.log('before call', manik, roton);

function totalMoney (person1, person2 ){
    person1.balance = 0;
    person2.balance = person2.balance/2
    const total = person1.balance + person2.balance;
    return total;
}

const valance = totalMoney(manik , roton);
console.log(valance)

console.log('after csll the function', manik , roton )//money value will change to 0(manik) and 20000(roton)...In non primitive data types the parameters get passed as reference means a location in memory..So, change in anywhere inside ovject would change the whole ovject values