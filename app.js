//Selectors
const todoInput = document.querySelector('.todo_input');
const todoButton = document.querySelector('.todo_bttn');
const todoList = document.querySelector('.todo_list');


//Event Listeners

todoButton.addEventListener('click', addTodo);

//Functions
function addTodo(event) {
    //Prevent form from submitting
    event.preventDefault();
    //Todo aside
    const todoAside = document.createElement("aside");
    todoAside.classList.add('todo');

    //Create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo_item');
    todoAside.appendChild(newTodo);
    //Check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete_btn");
    todoAside.appendChild(completedButton);

     //trash button
     const trashButton = document.createElement('button');
     trashButton.innerHTML = '<i class="fas fa-trash"></i>';
     trashButton.classList.add("trash_btn");
     todoAside.appendChild(trashButton);
     //Append to list
     todoList.appendChild(todoAside);

     //Clear todo input value
     todoInput.value = "";
     


 



}