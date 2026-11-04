const todoItemInput = document.getElementById("todoItemInput");
const addItemBtn = document.getElementById("addItemBtn");
const todoItemList = document.getElementById("todoItemList");
const clearBtn = document.getElementById("clearBtn");
const filterItem = document.getElementById("filterItem");
const noFilteredItem = document.querySelector(".no-filtered-item");
let isEditable = false;

// Show Items from storage when page loads
const showItemsFromStorage = () => {
    let itemsInStorage = getItemsFromStorage();
    itemsInStorage?.forEach((item) => {
        addTodoItemToDOM(item);
    })
}

// On submit btn click
const onSubmitBtnClick = (e) => {
    e.preventDefault();
    const inputVal = todoItemInput.value;
    if (!inputVal) {
        alert("Please add todo item");
        return;
    }

    if (isEditable) {
        let editModeElement = todoItemList.querySelector(".edit-mode");
        removeItem(editModeElement);
        isEditable = false;
        editModeElement.classList.remove("edit-mode");
    }
    else {
        if (checkDuplicateItem(inputVal)) {
            alert("Item already exists !!");
            return;
        }
    }

    addTodoItemToDOM(inputVal);
    addTodoItemToLocalStorage(inputVal);
}

// Adding Items to DOM
const addTodoItemToDOM = (inputVal) => {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(inputVal));

    const button = createButton("remove-item btn");
    const crossIcon = createCrossIcon("cross-icon");
    button.appendChild(crossIcon);

    li.appendChild(button);

    todoItemList.appendChild(li);

    todoItemInput.value = '';

    resetUI();
}

// Creating Buttons for Adding Item in DOM
const createButton = (classes) => {
    const removeButton = document.createElement("button");
    removeButton.className = classes;
    return removeButton;
}

const createCrossIcon = (classes) => {
    const icon = document.createElement("span");
    icon.className = classes;
    icon.innerHTML = "❌";
    return icon;
}

// Get TodoItems from Local storage
const getItemsFromStorage = () => {
    let itemsInLocalStorage;
    if (localStorage.getItem("items")) {
        itemsInLocalStorage = JSON.parse(localStorage.getItem("items"));
    }
    else {
        itemsInLocalStorage = [];
    }

    return itemsInLocalStorage;
}

// Add Todo Items to Local Storage
const addTodoItemToLocalStorage = (inputVal) => {

    let itemsInStorage = getItemsFromStorage();

    itemsInStorage.push(inputVal);

    localStorage.setItem("items", JSON.stringify(itemsInStorage));
}

// Check for Duplicate values
const checkDuplicateItem = (inputVal) => {
    let itemsInStorage = getItemsFromStorage();
    console.log(itemsInStorage, itemsInStorage.toLowerCase)
    // itemsInStorage.map((item) => {
    //     if (item === inputVal) {
    //         isDuplicateItem = true;
    //     }
    // })
    // return isDuplicateItem;

    return itemsInStorage.map((item) => item.toLowerCase()).includes(inputVal.toLowerCase());
}

// On Clicking any todo item
const onItemClick = (e) => {
    // Remove item on clicking cross btn
    if (e.target.parentElement.classList.contains("remove-item")) {
        removeItem(e.target.parentElement.parentElement);
    }
    // Update item on clicking on any item
    else if (e.target.tagName === 'LI') {
        setItemToEdit(e.target)
    }
}

// Update Item on clicking on any item 
const setItemToEdit = (targetElem) => {
    todoItemList.querySelectorAll('li').forEach((item) => {
        item.classList.remove("edit-mode");
    })
    targetElem.classList.add("edit-mode");
    todoItemInput.value = targetElem.firstChild.textContent;
    todoItemInput.focus();
    isEditable = true;
    addItemBtn.value = "Update Item";
    addItemBtn.classList.add("update-btn");
}

// Remove Item on clicking on cross btn
const removeItem = (targetElem) => {
    targetElem.remove();
    removeItemFromStorage(targetElem.firstChild.textContent);

    resetUI();
}

// Remove item from local storage, clicking on cross btn
const removeItemFromStorage = (targetElemText) => {
    let itemsInStorage = getItemsFromStorage();
    // Cna find index and splice that element or filter elem from array as that will return new array
    // let removeItemIndex = itemsInStorage.findIndex((item) => item === targetElemText);
    // itemsInStorage.splice(removeItemIndex, 1);

    itemsInStorage = itemsInStorage.filter((item) => item !== targetElemText);
    localStorage.setItem("items", JSON.stringify(itemsInStorage));
}

// Clear all items from local storage and DOM when clicking on clear btn
const clearItem = () => {
    // Not a better way to remove elements from DOM
    // todoItemList.innerHTML = '';

    // Better approach of removing elements from DOM
    while (todoItemList.firstChild) {
        todoItemList.removeChild(todoItemList.firstChild);
    }

    // clear items from local storage
    // localStorage.clear();
    localStorage.removeItem("items");

    resetUI();
}


// Reset UI i.e filter and clear btn if no item present
const resetUI = () => {
    let todoItemLists = document.querySelectorAll("#todoItemList li");

    if (!todoItemLists.length) {
        filterItem.style.display = "none";
        clearBtn.style.display = "none";
    }
    else {
        filterItem.style.display = "block";
        clearBtn.style.display = "block";
    }

    isEditable = false;
    addItemBtn.classList.remove("update-btn");
    addItemBtn.value = "Add Item";
}

// Filter Items
const filterResult = (e) => {
    const filterInput = e.target.value.toLowerCase();
    let todoItemLists = document.querySelectorAll("#todoItemList li");
    let isItemFound = false;

    todoItemLists.forEach((item) => {
        if (item.firstChild.textContent.toLowerCase().indexOf(filterInput) === -1) {
            item.style.display = "none";
            isItemFound = false;
        }
        else {
            item.style.display = "flex";
            isItemFound = true;
        }
    })

    if (!isItemFound) {
        console.log(noFilteredItem)
        noFilteredItem.classList.remove("hide");
    }
    else {
        noFilteredItem.classList.add("hide");
    }
}

const init = () => {
    addItemBtn.addEventListener("click", onSubmitBtnClick);
    todoItemList.addEventListener("click", onItemClick);
    clearBtn.addEventListener("click", clearItem);
    filterItem.addEventListener("input", filterResult);
    showItemsFromStorage();
}

init();