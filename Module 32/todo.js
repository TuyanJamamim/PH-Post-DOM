const loadTodo = () => {
    const url = "https://jsonplaceholder.typicode.com/todos";//url needs to ve inside a string
    fetch(url).then((response) => response.json()).then((data) => {

        console.log(data)
        displayTodo(data);//another function's can ve passed as parameter to a function..in fact a function's can ve anything within it's scope
    })
}

// {
// "userId": 1,
// "id": 1,
// "title": "delectus aut autem",
// "completed": false
// },



const displayTodo = (todos) => {
    // console.log(todos);
    const todoContainer = document.getElementById('todo-container');
    todoContainer.innerHTML = "";
    todos.forEach((todo) => {

        const todoElement = document.createElement('div');

        todoElement.innerHTML = `
        <div class="todo-card">
 <p>${todo.completed == true
                ? `completed  <i class="fa-solid fa-square-check"></i>`
                : `not complete  <i class="fa-regular fa-square-check"></i> `} 
    
     </p>
    <h4>${todo.title}</h4>
 

</div>


        `
        //inside innerHTML there is a class and that class is from html file..so an htnl class can ve used like this


        //inside innerHTML todo.complete a conditional rendering is used if todo.complete == true the ? and and statement inside ` ` and if it's not true the : and inside ` ` it's statement


        todoContainer.appendChild(todoElement)


    });

}


loadTodo();//todo datas will load automatically without click function