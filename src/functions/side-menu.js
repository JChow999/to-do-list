function buildSideMenu(addfunction, projectsFunct) {
  let sideMenu = document.createElement('div');
  let addDiv = document.createElement("div");
  let addText = document.createElement("h3");
  let generalTodoDiv = document.createElement("div");
  let generalTodoText = document.createElement("h3");

  generalTodoDiv.classList = "general-todo-list";
  generalTodoText.innerText = "General To-dos";
  generalTodoDiv.appendChild(generalTodoText);
  generalTodoDiv.addEventListener("click", () => {
    console.log("clicked general")
  })
  
  addDiv.className = "side-add-div";
  addText.innerText = "Add Project";
  addDiv.appendChild(addText);


  let addBtn = document.createElement("button");
  addBtn.className = "add-project-btn";
  addDiv.appendChild(addBtn);
  addBtn.addEventListener("click", () => {
    addfunction();
    updateSideMenu(projectsFunct());
  })

  sideMenu.id = "side-menu";
  sideMenu.appendChild(addDiv);
  sideMenu.appendChild(generalTodoDiv);
  sideMenu.appendChild(generateProjectElements(projectsFunct()));
  
  return sideMenu;
}

function generateProjectElements(information) {
  let projectContainer = document.createElement("div");

  projectContainer.className = "project-container";

  for (let x = 0; x < information.length; x++) {
    let projectDiv = document.createElement("div");
    let projectName = document.createElement("h3");
    let buttonsDiv = document.createElement("div");
    let editButton = document.createElement("button");
    let deleteButton = document.createElement("button");

    projectDiv.setAttribute("data-index", x);

    projectDiv.className = "side-project-div";
    buttonsDiv.className = "side-project-btns";
    editButton.className = "edit-btn";
    deleteButton.className = "delete-btn";
    projectName.innerText = information[x];


    editButton.addEventListener("click", () => {
      console.log(`Edit: ${information[x]}`)
    });

    deleteButton.addEventListener("click", () => {
      console.log(`Delete: ${information[x]}`)
    })
    
    projectDiv.appendChild(projectName);
    buttonsDiv.appendChild(editButton);
    buttonsDiv.appendChild(deleteButton);
    projectDiv.appendChild(buttonsDiv);
    
    projectContainer.appendChild(projectDiv);
  }

  return projectContainer;
}


function updateSideMenu(projectArray) {
  let projectCont = document.querySelector("#side-menu");

  document.querySelectorAll(".project-container").forEach(e => e.remove());
  
  projectCont.appendChild(generateProjectElements(projectArray));
}


function editProjectTitle(indexNum, newTitle) {
  console.log(newTitle)
  return
}


function deleteProject(info) {
  console.log(info)
}

export { buildSideMenu, updateSideMenu, generateProjectElements }