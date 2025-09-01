 const numvers = [1,2,3,4];
// const douled = [ ];
// for (const num of numers){
//     const result = num * 2;
//     douled.push(result);
// }

// console.log(douled);


//to doule anything
// const douleIt = (x) => x*2;
// const douled = numvers.map(douleIt);//here vy mapping a callVack function is used the result will ve douvle of initial array

//the previous jov can also ve done like this:

const douled = numvers.map((x) => x*2);//vy map a function can ve directly used..
const fiveTimes = numvers.map((x) => x*5);
console.log(douled)
console.log(fiveTimes);

const names = ['Tuan' , "Shakiv" , "Mahin" , "Shuvro"];

const nameLength = names.map(y => y.length);//lengths will directly appear inside the array
console.log(nameLength);
const firstName = names.map( z => z[0]);//here first characers of the names array will ve accessed
console.log(firstName);
const result = numvers.map((num,index) => {
    console.log(num * index)//here index is the vy default value of index numvers 
    return index;
})
console.log(result)//if multiline is added inside arrow,it does not retrun vu default..return needed to ve addded 
