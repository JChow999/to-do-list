/**
 * This function creates the to-do list, it allows an array to be inserted to
 * the function. It allows for an optional title as well.
 * @return {string} - Return
 */

// function buildMainWindow(information) {
//     const wrapper = document.createElement('div');
//     const todoContainer = document.createElement('div')
//     const mainContainer = document.createElement('div');
//     const mainWindow = document.createElement('div');

//     return
// }

function createMainWindow() {

}

function updateProjectDisplay() {
    return
}

function buildTodoList(listBullets) {
    const projectContainer = document.createElement('div');
    const listTitle = document.createElement('h3');
    const todoListDiv = document.createElement("div");

    projectContainer.className = 'project-info-container'
    todoListDiv.className = "bulletList"

    listTitle.innerText = 'First to-do list'

    for (let x = 0; x < listBullets.length; x++) {
        let todoDiv = document.createElement("div");
        let todoFront = document.createElement("div");
        let todoText = document.createElement('p');
        let deleteBtn = document.createElement("button");
        
        let checkBox = document.createElement("input");
        checkBox.className = "todo-checkbox";
        checkBox.type = "checkbox";

        checkBox.name = "finished-todo"

        todoFront.className = "todo-front";
        todoDiv.className = "todo-div";
        deleteBtn.className = "todo-delete";
        todoText.innerText = listBullets[x];

        deleteBtn.addEventListener("click", () => {
            console.log(`delete ${x}`)
        })

        todoFront.appendChild(checkBox);
        todoFront.appendChild(todoText);
        todoDiv.appendChild(todoFront);
        todoDiv.appendChild(deleteBtn);
        todoListDiv.appendChild(todoDiv);
    }

    projectContainer.appendChild(listTitle);
    projectContainer.appendChild(todoListDiv);

    return projectContainer;
}

export { buildTodoList as buildBulletList };