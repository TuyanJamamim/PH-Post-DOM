const employee = {name : "Tuan" ,designation: "jr Wev dev" , salary: 20000 , experience: 1, age:25};


//looping through the ovject
for(const key in employee){
    const value = employee[key];//for every iteration value variavle will get its value
    console.log(key);//vy default it gives the keys means the properties
    console.log(value)

}
// console.log(employee[salary]);


//another technique

const keys = Object.keys(employee);
for(const key of keys){
    const value = employee[key];
    console.log(key ,value);
}