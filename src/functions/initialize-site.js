import { buildBulletList } from "./list-info";
import { buildSideMenu, updateSideMenu } from "./side-menu";
import { buildHeader } from "./header";
import { initializeData } from "./data-storage";

function initializeMain() {
  const mainScreen = document.createElement('div');
  const wrapper = document.createElement('div');
  const todoContainer = document.createElement('div')
  const mainContainer = document.createElement('div');
  const mainWindow = document.createElement('div');
  const addBtn = document.querySelector("#add-project-btn")

  const todoData = initializeData();

  // Prints out project list into console
  document.onkeydown = (e) => {
    console.log(e)
    if (e.key == "p") {
      todoData.getProjects()
    }
  }

  const newListBtn = document.createElement('button');

  todoContainer.id = 'todo-container';
  wrapper.className = 'wrapper';
  mainScreen.id = 'main-screen';
  mainContainer.id = "main-container";
  mainWindow.id = "main-window";
  
  // To be removed
  let toDoElements = ['Eat food', 'Sleep', 'Drink Water'];

  mainScreen.appendChild(buildHeader());
  mainScreen.appendChild(buildSideMenu(todoData.addNewProject, todoData.getProjects));
  wrapper.appendChild(todoContainer);
  todoContainer.appendChild(mainContainer);
  mainWindow.appendChild(buildBulletList(toDoElements));
  mainContainer.appendChild(mainWindow);
  mainScreen.appendChild(wrapper);

  return mainScreen;
}

export { initializeMain }