import './styles/style.css';
import { initializeMain } from './functions/initialize-site';
import { buildHeader } from './functions/header';
import { updateSideMenu } from './functions/side-menu';

const body = document.querySelector('body');

let projectList = ['project1', 'project2', 'cat project', 'dog project'];

body.appendChild(initializeMain());
updateSideMenu(projectList);



