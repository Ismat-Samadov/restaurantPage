// index.js

import { createHomepage } from './homepage';
import { createContactPage } from './contact';
import { createMenuPage } from './menu';

// Call the function to create homepage content when the page is loaded
window.addEventListener('DOMContentLoaded', () => {
    createHomepage();

    // Event listeners for tab switching
    const homeButton = document.getElementById('home-button');
    const contactButton = document.getElementById('contact-button');
    const menuButton = document.getElementById('menu-button');

    homeButton.addEventListener('click', () => {
        clearContent();
        createHomepage();
    });

    contactButton.addEventListener('click', () => {
        clearContent();
        createContactPage();
    });

    menuButton.addEventListener('click', () => {
        clearContent();
        createMenuPage();
    });
});

// Function to clear content
function clearContent() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';
}
