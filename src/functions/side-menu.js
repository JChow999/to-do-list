
function buildSideMenu() {
  const sideMenu = document.createElement('div');

  sideMenu.id = "side-menu";
  
  return sideMenu;
}

function updateSideMenu(information) {
  let sideMenu = document.querySelector("#side-menu")

  for (let x = 0; x < information.length; x++) {
    let projectDiv = document.createElement("div");
    let projectName = document.createElement("h3");
    let deleteButton = document.createElement("button");

    projectDiv.className = "project-div";
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