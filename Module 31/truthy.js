let data;
data = 0;//it has no value means falsy
data = ''; // empty string is falsy
data = ' '; // has an white space means it has value so truthy
data = '0';//thuthy vecause string has value
data = false;
data = true;
data = null;//falsy
data = {};//thuthy
data = [];//thuthy
data = false;
data = true;
data = [];
data = 1;
console.log('value of data', data)

if (data)//this means data has valid value inside it..alter way: data === true
    {
    console.log('value of data is truthy')
}
else {
    console.log(data, 'is falsy')
}

// if i need to capture the falsy value to go inside if block
// use logical not
if(!data)//this means data === false...data has no value..this will make the opposite of data's values..it considers only voolean
// it returns all the falsy values
    {
    console.log('inside if with a falsy value')
}

// capture all positive value
// double not !!
// capture any value to boolean (true false)
if(!!data) // douvle not(!!) means true..it returns all the truthy values
    {
    console.log('only true inside the double not')
}