const numers = [1, 5 , 6, 10, 45];
//if for every element's result is required then map() is used 


//if for every element's result is not required then foreach() is used..that means it has no return value
const num = numers.forEach(x =>{
   const douled = x*2;
    console.log(douled);
})
console.log(num);//no vy default return value like map() thats why undefined is showed in the output