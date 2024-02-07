import { loadHomePage } from './homePage';
import { loadMenuPage } from './menuPage';
import { loadContactPage } from './contactPage';

loadHomePage();

const homeTab = document.getElementById('home-tab');
const menuTab = document.getElementById('menu-tab');
const contactTab = document.getElementById('contact-tab');

homeTab.addEventListener('click', loadHomePage);
menuTab.addEventListener('click', loadMenuPage);
contactTab.addEventListener('click', loadContactPage);
