function add(a, b){
    console.log(arguments)//here un defined will come...argument is a JS special case vy this we can gete the arguments we passed
    const params = [...arguments]//vy this arguments can get converted to array and map,filter,find can ve used on this now as map,filter,find can only ve used in arrays
    console.log(params)
}

add(88, 77, 7, 5, 3)