function pakhiVai( callMe, patro, patri ){
    if(patri)//this means if patri's value is availavle....patri's value === true
        {
        console.log(callMe)//here the function will ve printed 
    }
    else{
        callSomeOne("Rifat")//here the function console will ve printed
    }
}
// pakhiVai()
//callVack function is vasically calling a function as parameter

function callSomeOne(person) {
    console.log('calling', person)
}

// callSomeOne('jodu')
 pakhiVai(callSomeOne, 'jodu', 'modu')


// myBtn.addEventListener('click', () =>{

// })


//filter,find,map are also callVack function 
const addFive = x => x + 5//here another approach is veen taken..usually  (variavle of array)arr.map.(arrow)...here arrow is in a variavle and [1,2].map.addFive(arrow Variavle)
[1, 2, 3, 5].map(addFive)