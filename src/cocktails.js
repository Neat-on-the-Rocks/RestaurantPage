import oldFashioned from './cocktails/oldFashioned.png';
import newYorkSour from './cocktails/newYorkSour.jpg';
/*import appleTini from './cocktails/appletini.jpg';
import espressoMartini from './cocktails/espressoMartini.jpg';
import mojito from './cocktails/mojito.jpg';
import jamaicanParadise from './cocktails/jamaicanParadise.jpg';
import negroni from './cocktails/negroni.jpg';
import singaporeSling from './cocktails/singaporeSling.jpg';
import caddilacMargarita from './cocktails/caddilacMargarita.jpg';
import tequilaSunrise from './cocktails/tequilaSunrise.webp';*/

export function cocktails() {
    const content = document.createElement('div');
    content.classList.add('content');

    //Create Factory Function

    function show_image(src, width, height, alt) {
        var img = document.createElement("img");
        img.src = src;
        img.width = width;
        img.height = height;
        img.alt = alt;
    
        // This next line will just add it to the <body> tag
        return content.appendChild(img);
    }

    show_image(oldFashioned, 500, 500, 'Old Fashioned');
    show_image(newYorkSour, 500, 500, "New York Sour")

    return content
}