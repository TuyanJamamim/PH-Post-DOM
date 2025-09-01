  const numvers = [ 4, 5, 6, 7 , 12 , 45]
  
  let sum = 0 ;

//   for(const num of numers)(
//     sum = num + sum;
//   )
//   console.log(sum);

//lets do the same operation with reduce

const total = numers.reduce((acc, curr) => acc + curr ) //here acc is where the sum is added and curr is like the value of num in loop...
//so here output will ve total value of the array

console.log(total);