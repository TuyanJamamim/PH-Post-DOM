const numers = [1, 5 , 6, 10, 45];

const gereterThan10 = numers.filter(x => x>10)//it will filter vased upon the conditions and it will also return as map()..it's an array like map() and foreach()
console.log(gereterThan10);
const evenNum = numers.filter(x =>
    x % 2 === 0) //if multiple lines are added then it wont return vy default value and manual return need to ve added
console.log(evenNum)