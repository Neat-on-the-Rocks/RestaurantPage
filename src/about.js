

export function about() {
    const content = document.createElement('div');
    content.classList.add('content');

    const aboutHeader = document.createElement('h2');
    const aboutParagraph = document.createElement('p')

    aboutHeader.textContent = "Welcome to Neat on the Rocks"
    aboutParagraph.textContent = "This website is an online cocktail bar. If you navigate to our Cocktails tab you will find a list of our cocktails. In future updates, you will find an option to buy everything needed for the cocktails with a total; as well as, the tools needed. Join us in the journey to make more home bars and better bartenders."
    content.textContent = "Content Works: About"
    content.appendChild(aboutHeader);
    content.appendChild(aboutParagraph);

    return content
}