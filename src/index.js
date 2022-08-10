import './style.css';
import {header} from './header.js'
import {about} from './about.js'
import {cocktails} from './cocktails'
import {contact} from './contact'


const firstLoad = () =>{
    document.body.appendChild(header());
    document.body.appendChild(about());
}


const aboutLoad = () => {
    document.body.appendChild(header());
    document.body.appendChild(about());
}

const cocktailLoad = () => {
    document.body.appendChild(header());
    document.body.appendChild(cocktails());
}

const contactLoad = () => {
    document.body.appendChild(header());
    document.body.appendChild(contact());
}

firstLoad();