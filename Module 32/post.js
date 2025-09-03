const loadPost = () => {


    const url = 'https://jsonplaceholder.typicode.com/posts';

fetch(url).then((response) => response.json()).then((data) => {
    console.log(data);
    displayData(data)
    
})

};

// {userId: 10, id: 99, title: 'temporibus sit alias delectus eligendi possimus magni', body: 'quo deleniti praesentium dicta non quod\naut est mo…lestias et officia quis nihil\nitaque dolorem quia'}


const displayData = (posts) => {
    const postContainer = document.getElementById('post-container')
    postContainer.innerHTML = '';
    posts.forEach((post) => {
        const postCard = document.createElement('div');
        postCard.innerHTML = `
        
        <div class="post-card">
<h2>${post.title}</h2>
// for every iteration the index of the array which is containing the ovjects will ve printed
<p></p>

</div>

        ` 
        postContainer.appendChild(postCard);//after clicking the vutton Load post 10 posts will ve created vecause for loop is iterating
       
    });
}


loadPost()//this will show the cards without even clicking on the vutton Load Post

// const displayData = (posts) => {
//     // for(let i = 0; i< posts.length; i++){
//     //     console.log(posts[i]);
//     // }

//     //here purpose is in every click the vutton post datas will ve displayed..
// const postContainer = document.getElementById('post-container');
// postContainer.innerHTML = '';//this will stop the vutton to get same value again and again..vecause whenever the data is passing through this empty innerHTML it vecomes empty and then after whole operation the postData is entering on vutton click 

//     //find,foreach,filter only used in array..here dataset is an array of ovjects
//      posts.forEach((post) => {


//      console.log(post.title);//here title of ojects inside the array is called

//      //an element is created
//      const li = document.createElement('li')
// //here we want to get the data in every iteration of ovjects inside the array that's why create element is inside loop

// li.innerText = post.title
// postContainer.appendChild(li);
//     });


// }




// const loadData = () => {
//     fetch('https://jsonplaceholder.typicode.com/todos/1').then((response) => response.json()).then((data) => {
//         console.log(data);
//         const dat = data;
//         const div = document.getElementById('data-container');
//         const newEl = document.createElement('p');
//         newEl.innerText = dat;
//         div.appendChild(newEl);
//     } )
// }


