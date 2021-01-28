import { $, boilerPlateHTML, boilerPlateStyles } from "./Library/the404s.js";

//$('body').innerHTML = boilerPlateHTML;
$('body').insertAdjacentHTML('beforeend', boilerPlateHTML);



/* 
$('body').style.textAlign = boilerPlateStyles.body.textAlign;

$('header').style.width = boilerPlateStyles.header.width;

$('main').style.width = boilerPlateStyles.main.width;

$('main').style.display = boilerPlateStyles.main.display;

$('main').style.justifyContent = boilerPlateStyles.main.justifyContent;

$('footer').style.width = boilerPlateStyles.footer.width;

$('footer').style.height = boilerPlateStyles.footer.height;
 */


for (const key in boilerPlateStyles) {
    const element = boilerPlateStyles[key];

    for (const prop in element) {
        $(key).style[prop] = element[prop];
    }
}

