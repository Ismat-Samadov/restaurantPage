export function createHomepage() {
    const contentDiv = document.getElementById('content');

    const image = document.createElement('img');
    // image.src = '../ images / img1.jpg';
    contentDiv.appendChild(image);

    const headline = document.createElement('h1');
    headline.textContent = 'Welcome to Our Restaurant!';
    contentDiv.appendChild(headline);

    const description = document.createElement('p');
    description.textContent = 'Discover the finest cuisine and experience a wonderful dining atmosphere at our restaurant.';
    contentDiv.appendChild(description);
}
