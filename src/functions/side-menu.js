function buildSideMenu(addfunction, projectsFunct) {
  const sideMenu = document.createElement('div');
  let addDiv = document.createElement("div");
  let addText = document.createElement("h3");
  let projectList = document.createElement("div");
  
  addDiv.className = "side-add-div";
  addText.innerText = "Add Project";
  addDiv.appendChild(addText);

  projectList.classList = "project-container";
  
  let addBtn = document.createElement("button");
  addBtn.className = "add-project-btn";
  addDiv.appendChild(addBtn);

  addBtn.addEventListener("click", () => {
    addfunction();
    updateSideMenu(projectsFunct());
  })

  projectList.innerHTML = generateProjectElements(projectsFunct())

  sideMenu.id = "side-menu";
  sideMenu.appendChild(addDiv);
  sideMenu.appendChild(projectList);
  
  return sideMenu;
}

function generateProjectElements(information) {
  let projectContainer = document.createElement("div");

  for (let x = 0; x < information.length; x++) {
    let projectDiv = document.createElement("div");
    let projectName = document.createElement("h3");
    let deleteButton = document.createElement("button");

    projectDiv.setAttribute("data-index", x);

    projectDiv.className = "side-project-div";
    deleteButton.className = "delete-btn";
    projectName.innerText = information[x];

    deleteButton.addEventListener("click", () => {
      deleteProject(information[x]);
    })

    projectDiv.appendChild(projectName);
    projectDiv.appendChild(deleteButton);
    projectContainer.appendChild(projectDiv);
  }

  return projectContainer.innerHTML;
}

function updateSideMenu(projectArray) {
  let projectCont = document.querySelector(".project-container")
  
  projectCont.innerHTML = generateProjectElements(projectArray)
}

function editProjectTitle() {
  return
}

function deleteProject(info) {
  console.log(info)
}

export { buildSideMenu, updateSideMenu, generateProjectElements }