import oldFashioned from './cocktails/oldFashioned.png';
import newYorkSour from './cocktails/newYorkSour.jpg';
import appleTini from './cocktails/appletini.jpg';
import espressoMartini from './cocktails/espressoMartini.jpg';
import mojito from './cocktails/mojito.jpg';
import jamaicanParadise from './cocktails/jamaicanParadise.jpg';
import negroni from './cocktails/negroni.jpg';
import singaporeSling from './cocktails/singaporeSling.jpg';
import caddilacMargarita from './cocktails/caddilacMargarita.jpg';
import tequilaSunrise from './cocktails/tequilaSunrise.png';

export function cocktails() {
    const content = document.createElement('div');
    content.classList.add('content');

    function show_image(cocktailName, src, alt, div) {
        const box = document.createElement('div');
        var title = document.createElement("h3");
        title.textContent = cocktailName;
        var img = document.createElement("img");
        img.src = src;
        img.width = 500;
        img.height = 500;
        img.alt = alt;
    
        box.appendChild(title);
        box.appendChild(img);

        div.appendChild(box)
    }

    const whiskeyCocktails = document.createElement('div');
    show_image('Old Fashioned', oldFashioned, 'Old Fashioned', whiskeyCocktails)
    show_image('New York Sour', newYorkSour, "New York Sour", whiskeyCocktails)
    content.appendChild(whiskeyCocktails);

    const vodkaCocktails = document.createElement('div');
    show_image('Appletini', appleTini, '', vodkaCocktails);
    show_image('Espresso Martini', espressoMartini, '', vodkaCocktails);
    content.appendChild(vodkaCocktails);


    const rumCocktails = document.createElement('div');
    show_image('Mojito', mojito, '', rumCocktails);
    show_image('Jamaican Paridise', jamaicanParadise, '', rumCocktails);
    content.appendChild(rumCocktails);

    const ginCocktails = document.createElement('div');
    show_image('Negroni', negroni, '', ginCocktails);
    show_image('Singapore Sling', singaporeSling, '', ginCocktails);
    content.appendChild(ginCocktails);

    const tequilaCocktails = document.createElement('div');
    show_image('Cadillac Margarita', caddilacMargarita, '', tequilaCocktails);
    show_image('Tequila Sunrise', tequilaSunrise, '', tequilaCocktails);
    content.appendChild(tequilaCocktails);

    return content
}