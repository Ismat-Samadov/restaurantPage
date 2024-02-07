export function loadContactPage() {
    const content = document.getElementById('content');
    const contactDiv = document.createElement('div');
    contactDiv.textContent = "Contact us at: example@example.com";
    // Add more contact information here as needed
    content.appendChild(contactDiv);
}
