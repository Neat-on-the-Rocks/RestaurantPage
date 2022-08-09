import './style.css';

function component() {
    const content = document.createElement('div');
    content.classList.add('content');

    const header = document.createElement('h1');
    header.innerHTML = "Neat on the Rocks"
    content.innerHTML = "hello"
  
    content.appendChild(header);
    return content;

  }

  document.body.appendChild(component());
  