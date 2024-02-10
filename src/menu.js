// menu.js

export function createMenuPage() {
    const contentDiv = document.getElementById('content');

    // Create elements for the menu page content
    const menuTitle = document.createElement('h1');
    menuTitle.textContent = 'Our Menu';
    contentDiv.appendChild(menuTitle);

    // Create a list of menu items
    const menuList = document.createElement('ul');

    // Add menu items
    const menuItem1 = document.createElement('li');
    menuItem1.textContent = 'Appetizers';
    menuList.appendChild(menuItem1);

    const menuItem2 = document.createElement('li');
    menuItem2.textContent = 'Main Courses';
    menuList.appendChild(menuItem2);

    const menuItem3 = document.createElement('li');
    menuItem3.textContent = 'Desserts';
    menuList.appendChild(menuItem3);

    contentDiv.appendChild(menuList);
}
