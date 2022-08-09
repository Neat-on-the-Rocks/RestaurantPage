import './style.css';
import {header} from './header.js'
import {about} from './about.js'
import {cocktails} from './cocktails'
import {contact} from './contact'




document.body.appendChild(header());
document.body.appendChild(about());
document.body.appendChild(cocktails());
document.body.appendChild(contact());