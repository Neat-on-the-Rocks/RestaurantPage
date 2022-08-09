

export function contact() {
    const content = document.createElement('div');
    content.classList.add('contact-content');

    const contactHeader = document.createElement('h2')

    contactHeader.textContent = "Contact us!";

    const contactDetails = document.createElement('div');
    contactDetails.classList.add('contact-details');

    const number = document.createElement('p');
    const address = document.createElement('p');
    const email = document.createElement('p');

    number.textContent = "(605) 475-6968"
    address.textContent = "123 S Your Basement BLVD"
    email.textContent = "admin@neatonthe.rocks"

    contactDetails.appendChild(number);
    contactDetails.appendChild(address);
    contactDetails.appendChild(email);

    content.appendChild(contactHeader);
    content.appendChild(contactDetails);

    return content
}