1) What is the difference between var, let, and const?

Answer: var is function-scoped means it is available throughout the function where it is declared, or globally if declared outside a function, re-assignment is allowed in this and re-declaration of var is allowed in the same scope.
Where, let is block-scoped means it is only available inside {} where it is declared ,re-assignment is allowed in this and re-declaration of let in the same scope is not allowed.
const is also block-scoped and both re-assignment and re-declaration is not allowed in this.

2) What is the difference between map(), forEach(), and filter()?

Answer: map() transforms each element of an array and returns a new array and it returns a new array of the same length.
where, forEach() executes a function on each element of an array,but does not return a new array.
filter() returns a new array containing only the elements that pass a condition and the new array can be smaller than the original.


3) What are arrow functions in ES6?

Answer: Arrow functions are a new way to write functions in JavaScript introduced in ES6.They are shorter than regular functions and automatically the this value from their surrounding scope.
It has short syntax means no need for the function keyword,it has implicit returns means if there's only one statement return can be skipped.

4) How does destructuring assignment work in ES6?

Answer: Destructing allows to unpack values from arrays or objects into separate variables in a very clean way.Instead of manually accessing each property it can be destructed in one line like this:
const numbers = [10, 11, 12]
const [x, y, z] = numbers;
console.log(x)=10
console.log(y)=11
console.log(z)=12

5) Explain template literals in ES6. How are they different from string concatenation?

Answer: 
 