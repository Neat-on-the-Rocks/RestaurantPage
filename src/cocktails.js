import oldFashioned from './cocktails/oldFashioned.png';
import newYorkSour from './cocktails/newYorkSour.jpg';
import appleTini from './cocktails/appletini.jpg';
import espressoMartini from './cocktails/espressoMartini.jpg';
import mojito from './cocktails/mojito.jpg';
import jamaicanParadise from './cocktails/jamaicanParadise.jpg';
import negroni from './cocktails/negroni.jpg';
import singaporeSling from './cocktails/singaporeSling.jpg';
import caddilacMargarita from './cocktails/caddilacMargarita.jpg';
import tequilaSunrise from './cocktails/tequilaSunrise.webp';


export function cocktails() {
    const content = document.createElement('div');
    content.classList.add('content');

    content.textContent = "Content Works: Cocktails"

    return content
}