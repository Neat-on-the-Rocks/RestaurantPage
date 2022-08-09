import Logo from './oldFashioned.png'

export function header() {
    const header = document.createElement('div');
    header.classList.add('header');
    
    const myLogo = new Image();
    myLogo.src = Logo;
  
    const title = document.createElement('h1');
    title.innerHTML = "Neat on the Rocks"

    header.appendChild(myLogo);
    header.appendChild(title);
    return header;

}
