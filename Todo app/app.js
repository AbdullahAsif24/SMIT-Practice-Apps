const todoInp = document.getElementById("todo-inp")
const listGroup = document.getElementsByClassName("list-group")[0]
const addTodoButton = document.getElementsByClassName("btn-addTodo")[0]

const todoArr = [];


function deleteTodo(index) {
    todoArr.splice(index, 1)
    displayTodos()
}

let ind;
function editTodo(index) {
    addTodoButton.innerHTML = 'Save'
    todoInp.value = todoArr[index]
    ind = index;
}

addTodoButton.addEventListener('click', ()=>{
    if(addTodoButton.innerHTML === 'Save'){
        todoArr[ind] = todoInp.value
        displayTodos()
    } else if(addTodoButton.innerHTML === 'Add') {
        addTodo()
    }
    addTodoButton.innerHTML = 'Add'
    todoInp.value = ''
})

function addTodo() {
    if (todoInp.value.length >= 3) {
        todoArr.push(todoInp.value)
        displayTodos()
    }
}

function displayTodos() {
    listGroup.innerHTML = ''
    todoArr.forEach((todo, i) => {
        listGroup.innerHTML += `
        <li class="list-item mb-1 p-1 d-flex justify-content-between align-items-center w-50 border border-secondary rounded ps-2">
            <span>${todo}</span>
            <div class="btn-div">
                <button class="btn btn-outline-secondary" type="button" id="button-addon2" onclick="editTodo(${i})">edit</button>
                <button class="btn btn-outline-secondary" type="button" id="button-addon2" onclick="deleteTodo(${i})">delete</button>
            </div>
        </li>
        `
    })
}
