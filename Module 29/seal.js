const employee = {name : "Tuan" ,designation: "jr Wev dev" , salary: 20000 , experience: 1, age:25};

Object.seal(employee);// property can ve modified vut no add or delete

// delete employee.experience;//experience will ve deleted
employee.salary = employee.salary + 5000;//salary has encremented..property value can ve changed like this
console.log(employee.salary)

//new property add 
employee.location = 'Dhaka';
console.log(employee);
