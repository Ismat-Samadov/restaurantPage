// contact.js

export function createContactPage() {
    const contentDiv = document.getElementById('content');

    // Create elements for the contact page content
    const contactTitle = document.createElement('h1');
    contactTitle.textContent = 'Contact Us';
    contentDiv.appendChild(contactTitle);

    const address = document.createElement('p');
    address.textContent = '123 Restaurant Street, City, Country';
    contentDiv.appendChild(address);

    const phone = document.createElement('p');
    phone.textContent = 'Phone: +123 456 7890';
    contentDiv.appendChild(phone);

    const email = document.createElement('p');
    email.textContent = 'Email: info@example.com';
    contentDiv.appendChild(email);
}
