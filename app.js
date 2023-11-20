//Selectors
const todoInput = document.querySelector('.todo_input');
const todoButton = document.querySelector('.todo_bttn');
const todoList = document.querySelector('.todo_list');
const filterOption = document.querySelector('.filtertodo');


//Event Listeners

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click' ,deleteCheck);
filterOption.addEventListener('click', filterTodo);

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

function deleteCheck(e){
    const item = e.target;
    //Delete ToDo
    if (item.classList[0] === "trash_btn") {
        const todo = item.parentElement;
        //animation
        todo.classList.add("fall");
        todo.addEventListener('transitionend', function(){
            todo.remove();

        });

        
    }

    //check mark

    if (item.classList[0] === "complete_btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }

}

function filterToDo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value) {
            case "all":
                todo.style.display = 'flex';
                break;
                case "completed":
                    if(todo.classList.contains('completed')){
                        todo.style.display = 'flex';
                    }else{
                        todo.style.display = "none";
                    }
        }
    });
}
    
