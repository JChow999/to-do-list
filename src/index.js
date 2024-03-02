import './styles/style.css';
import { initializeMain } from './functions/initialize-site';
import { buildHeader } from './functions/header';
import { updateSideMenu } from './functions/side-menu';

const body = document.querySelector('body');

body.appendChild(initializeMain());

