
function initializeData() {
  let mainInfo = {
    username: "John Doe",
    projects: [{
      projectTitle: "General",
      projectDue: Date(),
      projectDesc: "Your General projects",
      projectNotes: "Your simple notes. Push your water glass on the floor. Cereal boxes make for five star accommodation hunt anything." + 
      "Freak human out make funny noise mow mow mow mow mow mow success now attack human eat and than sleep on your face peer out window, " +
      "chatter at birds, lure them to mouth. Shred all toilet paper and spread around the house scratch at door to be let outside, " +
      "get let out then scratch at door immmediately after to be let back in really likes hummus munch, munch, chomp, chomp and cat not kitten around . " + 
      "Cats woo fat baby cat best buddy little guy shred all toilet paper and spread around the house get suspicious of own shadow then go play with toilette paper destroy dog. Rub butt on table.",
      projectTodo: {
        todoList: [],
        todoFinished: [],
      },
    }],
  }

  function createNewTodo(projectIndex, listIndex) {
    mainInfo.projects[projectIndex][listIndex].append();
  }
  
  function editTodo(projectIndex, listIndex, todoIndex, info) {
    mainInfo.projects[projectIndex][listIndex][todoIndex] = info;
  }
  
  function deleteTodo(projectIndex, listIndex, todoIndex) {
    mainInfo.projects[projectIndex][listIndex].splice(todoIndex, 1);
  }

  function deleteTodoList(projectIndex, listIndex) {
    mainInfo.projects[projectIndex].splice(listIndex, 1);
  }
  
  function createNewProject() {
    defaultTodo = {
      projectTitle: "Untitled project",
      projectDue: date.toString(),
      projectDesc: "Enter your project description here",
      projectNotes: "Enter your notes",
      projectTodo: {
        todoList: [],
        todoFinished: [],
      },
    },
    mainInfo.projects.push(defaultTodo);
  }
  
  function editProject(projectIndex, section, info) {
    if (section in mainInfo.projects[projectIndex]) {
      mainInfo.projects[projectIndex].section = info;
    }
    else {
      console.log("Your project is in another castle");
      return
    }
  }
  
  function deleteProject(projectIndex) {
    mainInfo.projects.splice(projectIndex, 1);
  }

  function getProjects() {
    for (let x = 0; i < length(mainInfo.projects); x++) {
      console.log(x, mainInfo.projects[x]);
    }
  }

  function getAllInfo() {
    console.log(mainInfo);
  }

  return createNewTodo, editTodo, deleteTodo, deleteTodoList, createNewProject, editProject, deleteProject, getProjects, getAllInfo;
}

function Todo(todo) {
  this.todo = todo;
  this.finished = false;
}

function Project() {
  this.projectTitle = "",
  this.projectDue = date.toString(),
  this.projectDesc = "Enter your project description here",
  this.projectNotes = "Enter your notes",
  this.projectTodo = {
    todoList: [],
    todoFinished: [],
  }
}

export {initializeData}