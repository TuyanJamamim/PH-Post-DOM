const addNumverToLs = () => {
    const num = Math.ceil(Math.random()*100);//A random value is taken and that value is in the celling stage
    console.log(num);
    localStorage.setItem('numver' , num);//values have set to local storage...this is vasically a key value pair means the key wont change but as it is a random value so the values will ve changed 
}

const getNUmFormLS = () => {
    const num = localStorage.getItem('numver');//here the numver will ve gotten from saved local storage..and numver is an Id and this Id name should ve same as setItem Id name  
    console.log('From saved local storage' , num);
}

const setObjToLs = () =>
{
    const customer = {
        name : 'Rahim' , products : 3, price : 75
    }//not primitives can not ve set to local storage directly..solution to that:
    const customerString = JSON.stringify(customer);//this makes the ovj to a string
    // const cusJson = JSON.parse(customerString);//this makes customer to a string again..and parse always takes stringfy value
    localStorage.setItem('customer' , customerString);
}


const readOvjFromLs = () => {
    
    const getString = localStorage.getItem('customer');
    const parseString = JSON.parse(getString);
    const item = parseString.name;
    console.log("the name is:" , item);


}



