const inputTodoItem = document.querySelector("#inputTodoItem");
const addTodoItem = document.querySelector(".add-todo-item");
const todoList = document.querySelector(".todo-list");

function addItem() {
    if (!inputTodoItem.value) {
        alert("Please add item!!");
        return;
    }
    let createLi = document.createElement("li");
    let taskInputField = document.createElement("input");
    taskInputField.classList.add("task-input-field");
    taskInputField.setAttribute("readonly", "readonly");
    taskInputField.value = inputTodoItem.value;
    createLi.appendChild(taskInputField);
    createLi.classList.add("todo-list-items-li")

    let btnCont = document.createElement("div");

    let editBtn = document.createElement("button");
    editBtn.classList.add("btn", "edit-btn");
    editBtn.innerText = "Edit";

    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("btn", "delete-btn");
    deleteBtn.innerText = "Delete";

    btnCont.appendChild(editBtn);
    btnCont.appendChild(deleteBtn);

    createLi.appendChild(btnCont);

    todoList.appendChild(createLi);

    editBtn.addEventListener("click", () => {
        if (editBtn.innerText === "Edit") {
            editBtn.innerText = "Save";
            taskInputField.removeAttribute("readonly");
            taskInputField.classList.add("edit-todoitem-content");
            taskInputField.focus();
        }
        else {
            if (taskInputField.value === "") {
                alert("Task name cann't be empty!");
                taskInputField.focus();
                return;
            }
            editBtn.innerText = "Edit";
            taskInputField.setAttribute("readonly", "readonly");
            taskInputField.classList.remove("edit-todoitem-content");
        }
    })

    deleteBtn.addEventListener("click", () => {
        createLi.remove();
    })
    localStorage.clear();
    console.log("JSON.stringify(createLi)", JSON.stringify(createLi), createLi)
    localStorage.setItem("todoItem", taskInputField.value);
    inputTodoItem.value = '';
}

addTodoItem.addEventListener("click", addItem);

function addItemInLocalStorage() {
    todoList.forEach((item) =>{
        
    })
}


// *** Another way to add evnt listener to main elemnt and then check while clicking on targets ***

// todoList.addEventListener("click", (event) => {
//     console.log(event.target, event.target.tagName, event.target.parentElement.parentElement)
//     if (event.target.tagName.toLowerCase() === 'li') {
//         console.log("Li target")
//     }
//     if (event.target.classList.contains("edit-btn")) {
//         console.log("Yes present")
//     }
//     if (event.target.innerText === "Edit") {
//         event.target.innerText = "Save";
//         event.target.removeAttribute("readonly");
//         event.target.focus();
//     }
//     else if (event.target.innerText === "Save") {
//         event.target.innerText = "Edit";
//         event.target.removeAttribute("readonly");
//         event.target.focus();
//     }
// })
