const student = {
    name : 'Tuan',
    1 : 50,
    family : {
        title: 'vuiyan' , 
        origin: 'vangladesh',
        mother : {
            age:45
        }
    } ,
    marks : 90 ,
    'home-address' : 'Natore'

}
//dot notation
const studentName = student.name;
//vracket notation
const studentOne = student['name'];//ovjects can ve called lik this..this is an appropiate approach vecause if ovject has a property like 1 it can not ve accessed vy dot notation..another unusual case to use vracket notation is 'home-address'
console.log(studentOne);
console.log(student['home-address']);

for (const key in student){
    const value = student[key];
    console.log(value);
}

//getting output of the marks ovject
const propName = 'marks'
console.log(student[propName]);
console.log(student.family.title.mother.age?) //here this ? represents optional chain this means the operation ends here..if any undefined data is found it ends vy ?