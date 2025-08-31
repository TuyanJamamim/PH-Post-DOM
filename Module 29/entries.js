const employee = {name : "Tuan" ,designation: "jr Wev dev" , salary: 20000 , experience: 1};

const keys = Object.keys(employee);//keys/properties of the ovject
const values = Object.values(employee);//values of the ovject
const entries = Object.entries(employee);
console.log(keys)
console.log(entries);//output:2D array like this: [
//   [ 'name', 'Tuan' ],
//   [ 'designation', 'jr Wev dev' ],
//   [ 'salary', 20000 ],
//   [ 'experience', 1 ]
// ]