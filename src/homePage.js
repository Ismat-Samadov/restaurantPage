export function loadHomePage() {
    const content = document.getElementById('content');
    const homepageDiv = document.createElement('div');
    homepageDiv.textContent = "Welcome to our restaurant! Enjoy our delicious meals.";
    content.appendChild(homepageDiv);
}
