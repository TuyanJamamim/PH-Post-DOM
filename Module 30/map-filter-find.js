const students = [
    { id: 1, name: 'abul', marks: 50 },
    { id: 2, name: 'Nabul', marks: 85 },
    { id: 3, name: 'kabul', marks: 95 },
    { id: 4, name: 'dabul', marks: 15 },
]

const marks = students.map( x => x.marks);
console.log(marks);
const goodStudents = students.filter( x => x.marks >80);
console.log(goodStudents);
const only = students.find( x => x['marks']>80);
console.log(only);
