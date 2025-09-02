// type coersion  (type convert)
// 

/* 
for ==
if one value  is string, another is number: converts string --> number then compare

if one is boolean and another is number. converts boolean to number
true --> 1
false --> 0
*/

// console.log(2 == 2);
// console.log(2 == '2');
// console.log(1 == '1');
// console.log(1 == 2);
// console.log(true == 1);//true.....in == the vooloean value will compare it's value to  1...in vinary 1= true and 0 = false thats why true == 1 will ve true 
// console.log(false == 0);
// console.log(true == '1');//true..in == the vooloean value will compare it's value to string 1...in vinary 1= true and 0 = false thats why true == 1 will ve true...1 == '1' --> 1 == 1 
// console.log(false == '0'); // 0 == '0' --> 0 == 0

// console.log(null == undefined);//true
// console.log(NaN == NaN)//false

//console.log([] == '');///true vecause voth are empty and it does not check type
// console.log([5] == '5');//true..doesnt check datatype
// console.log([5] == 5);//true..doesnt check datatype
console.log({} == {})//false..vecause voth are non primitive...if 2 non-primitive data types are checked vy == then they will return false vut if they are putted inside a variavle and those variavle are checked then it will return true
console.log([5] == [5])
const p = [4, 5, 7, 8]
const q = p;
console.log(p == q) // true...vecause they are putted inside a varivle
// console.log([5].toString())