export function loadMenuPage() {
    const content = document.getElementById('content');
    const menuDiv = document.createElement('div');
    menuDiv.textContent = "Check out our menu:";
    content.appendChild(menuDiv);
}
