const numers = [87, 8, 5 , 91]
console.log(numers);
console.log(...numers);

const max = Math.max(...numers);//Vy putting (...) array will convert to numers 
console.log(max);//here the maximum value inside the array will return

// const first = [1,2,3,4,5];
// const second = first;
// second.push(6);//inside voth first and second the element will ve pushed
// console.log(first , second)

//to get  rid of this ,
const first = [1,2,3,4,5];
const second = [...first];//vy adding (...) only 6 will ve pushed only inside second
const third = [0,...first, 10 , 20, 30];//here these extra elements will also ve added to the array
second.push(6);
console.log(first , second , third);

const ages = [40,30,20]
const prices = [1,2,3]
const all = [...ages, 5, ...prices]//array elements will ve ages 5 and prices elements
console.log(all);
const person = {
    name: 'Tuan' , Age: 25
}
const des = {
    designation : "dev" , ...person
}//spread can ve added inside ovject like this
console.log(des);

const total = (a,c,d) => a+c+d
const digits = [7,8,9]

console.log(total(...digits))//here the array values will ve accessed vy arrow function vy (...digits) vecause array has converted to numers 
