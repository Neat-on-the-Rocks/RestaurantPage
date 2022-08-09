import './style.css';
import Logo from './oldFashioned.png'

function component() {
    const content = document.createElement('div');
    content.classList.add('content');
    
    const myLogo = new Image();
    myLogo.src = Logo;
  
    const header = document.createElement('h1');
    header.innerHTML = "Neat on the Rocks"

    content.appendChild(myLogo);
    content.appendChild(header);
    return content;

  }

  document.body.appendChild(component());
  