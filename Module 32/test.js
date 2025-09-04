const fetchData = async () => {


    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    const res = await fetch(url);
    console.log(true)
    const data = await res.json();
    console.log(data);
    


      console.log("hello");

      //mow everything will ve printed sequentially/snycronusly

    }

//here hello and true will ve displayed first and fetch will ve displayed later...to overcome that, async() is like the example on top 
