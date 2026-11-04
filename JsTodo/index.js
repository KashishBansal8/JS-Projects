let inputVal = document.getElementById("taskInput");
let submitBtn = document.getElementById("submitBtn");
let taskList = document.querySelector(".task-list");

const addTask = (e) => {
    e.preventDefault();
    let liElem = document.createElement("li");
    let inputValText = inputVal.value;
    liElem.innerText = inputValText;

    let editBtn = createEditButton();
    liElem.appendChild(editBtn);

    let deleteBtn = createDeleteButton();
    liElem.appendChild(deleteBtn);

    taskList.append(liElem);
}

const createEditButton = () => {
    let editBtn = document.createElement("button");
    editBtn.classList.add("edit-btn");
    editBtn.innerText = "Edit";
    return editBtn;
}

const createDeleteButton = () => {
    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.innerText = "Delete";
    return deleteBtn;
}

const onTaskClick = (e) => {
    if (e.target.classList.contains("edit-btn")) {
        // let value = prompt("Edit task", e.target.parentElement.firstChild.textContent);
        // console.log(value);
    }

    let newArr = [];
    for (let i = 0; i < 5; i++) {
        let value = prompt("Enter task", "");
        console.log(value);
        newArr.push(value);
    }
    console.log(newArr);
}

submitBtn.addEventListener("click", addTask);
taskList.addEventListener("click", onTaskClick);