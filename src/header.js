import Logo from './oldFashioned.png'

// function createNav() {
//     const nav = document.createElement("nav");
  
//     const homeButton = document.createElement("button");
//     homeButton.classList.add("button-nav");
//     homeButton.textContent = "About";

//     const menuButton = document.createElement("button");
//     menuButton.classList.add("button-nav");
//     menuButton.textContent = "Cocktails";
  
//     const contactButton = document.createElement("button");
//     contactButton.classList.add("button-nav");
//     contactButton.textContent = "Contact";
  
//     nav.appendChild(homeButton);
//     nav.appendChild(menuButton);
//     nav.appendChild(contactButton);
  
//     return nav;
//   }

function leftHeader() {
    const headerLeft = document.createElement('div');
    headerLeft.classList.add('header-left');
    
    const myLogo = new Image();
    myLogo.src = Logo;
  
    const title = document.createElement('h1');
    title.innerHTML = "Neat on the Rocks";

    headerLeft.appendChild(myLogo);
    headerLeft.appendChild(title);

    return headerLeft;
}

function rightHeader() {
    const nav = document.createElement("nav");
  
    const homeButton = document.createElement("button");
    homeButton.classList.add("button-nav");
    homeButton.textContent = "About";

    const menuButton = document.createElement("button");
    menuButton.classList.add("button-nav");
    menuButton.textContent = "Cocktails";
  
    const contactButton = document.createElement("button");
    contactButton.classList.add("button-nav");
    contactButton.textContent = "Contact";
  
    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(contactButton);
  
    return nav;
}

export function header() {
    const header = document.createElement('div');
    header.classList.add('header');
    
    header.appendChild(leftHeader());
    header.appendChild(rightHeader());    

    return header;

}
