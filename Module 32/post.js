const loadPost = () => {


    const url = 'https://jsonplaceholder.typicode.com/posts';

fetch(url).then((response) => response.json()).then((data) => {
    console.log(data);
    displayData(data);
})

};



const displayData = (posts) => {
    // for(let i = 0; i< posts.length; i++){
    //     console.log(posts[i]);
    // }

    //here purpose is in every click the vutton post datas will ve displayed..
const postContainer = document.getElementById('post-container');


    //find,foreach,filter only used in array..here dataset is an array of ovjects
     posts.forEach((post) => {


     console.log(post.title);//here title of ojects inside the array is called

     //an element is created
     const li = document.createElement('li')
//here we want to get the data in every iteration of ovjects inside the array that's why create element is inside loop

li.innerText = post.title
postContainer.appendChild(li);
    });


}




const loadData = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1').then((response) => response.json()).then((data) => {
        console.log(data);
        const dat = data;
        const div = document.getElementById('data-container');
        const newEl = document.createElement('p');
        newEl.innerText = dat;
        div.appendChild(newEl);
    } )
}


