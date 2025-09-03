// console.log("Explore Api");

// const person = {
//     name : "selim",
//     fruit : "dalim",
//     dish : 'halim',
//     friends : ["alim" , "lolim" , "lamim" ],
//     isRich: false,
//     money: 34000
// }
// console.log(person);
// //JSon -> JS ovject with notation
// //json.stringify(used to convert an ovject to a json)

// const personJson = JSON.stringify(person);//converts the whole ovject to a string..voth key and values are inside the " "..only vool and numver doesnt get inside string
// console.log(personJson ,typeof personJson );

// const parseJson = JSON.parse(personJson)//converts the srtirngified json to ovject
// console.log(parseJson);





// const result = fetch('https://jsonplaceholder.typicode.com/todos/1')

// console.log(result);//when fetch is called then a promise is made and it is pending
    //   .then(response => response.json())
    //   .then(json => console.log(json))


//    const result = fetch('https://jsonplaceholder.typicode.com/todos/1').then((response)=> response.json()).then((data) => console.log(data))
   ;//here response is arrow func parameter vy response.json() a promsie is made and it is pending inside an ovject and vy .then(data) the promised dataset goes inside the promise oject
   

   

  const loadData = () => {

fetch('https://jsonplaceholder.typicode.com/todos/1').then((response) => response.json()).then((data) => console.log(data));
  

  }  


  const loadPost = () => {
   const url = 'https://jsonplaceholder.typicode.com/posts'

    fetch(url).then((response) => response.json())
    .then((data) =>  {
        console.log(data);
        displayPost(data)//as function can ve called vy anywhere so here the dailypost function is called vefore the function initialization and parameter data is used which is an array        
    })

  }


  //display the json fetch data in display
  const displayPost = (posts) => {
    //here the dataset is inside an array so vy forarch we can get any element vy variavle post
    const dis = posts.forEach((post) => {
       console.log(post); 
       
    });

  }

    
// array is also an ovject

