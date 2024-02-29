function buildSideMenu(addfunction, projectsFunct) {
  const sideMenu = document.createElement('div');
  let addDiv = document.createElement("div");
  let addText = document.createElement("h3");
  
  addDiv.className = "side-add-div";
  addText.innerText = "Add Project";
  addDiv.appendChild(addText);
  
  let addBtn = document.createElement("button");
  addBtn.className = "add-project-btn";
  addDiv.appendChild(addBtn);

  // To be deleted
  let projectList = ['newProject1', 'project2', 'cat project', 'dog project'];

  addBtn.addEventListener("click", () => {
    addfunction();
    updateSideMenu(projectsFunct());
  })

  sideMenu.id = "side-menu";
  sideMenu.appendChild(addDiv);
  return sideMenu;
}

function updateSideMenu(information) {
  let sideMenu = document.querySelector("#side-menu");

  document.querySelectorAll(".side-project-div").forEach(e => e.remove());

  for (let x = 0; x < information.length; x++) {
    let projectDiv = document.createElement("div");
    let projectName = document.createElement("h3");
    let deleteButton = document.createElement("button");

    projectDiv.setAttribute("data-index", x);

    projectDiv.className = "side-project-div";
    deleteButton.className = "delete-btn";
    projectName.innerText = information[x];

    deleteButton.addEventListener("click", () => {
      deleteProject(projectName.innerText)
    })

    projectDiv.appendChild(projectName);
    projectDiv.appendChild(deleteButton);
    sideMenu.appendChild(projectDiv);
  }
}

function deleteProject(info) {
  console.log(info)
}

export { buildSideMenu, updateSideMenu }