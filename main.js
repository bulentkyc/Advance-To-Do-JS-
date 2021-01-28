import { $, boilerPlateHTML, boilerPlateStyles } from "./Library/the404s.js";
import {todoHeader, todoHeaderF} from "./Components/todoHeader.js";
import todoList from "./Components/todoList.js";

//$('body').innerHTML = boilerPlateHTML;
$('body').insertAdjacentHTML('beforeend', boilerPlateHTML);

//$('main').insertAdjacentHTML('beforeend', todoHeader);
$('main').insertAdjacentHTML('beforeend', todoHeaderF('Add Item'));

let items = [];

if(localStorage.getItem('todo') != null) {
    items = JSON.parse(localStorage.getItem('todo'));
}

$('section').insertAdjacentHTML('beforeend', todoList(items));
//$('main').insertAdjacentHTML('beforeend', '<ul><li>Test</li></ul>');

function storageUpdateHandler() {
    localStorage.setItem('todo', JSON.stringify(items))
}

function addItemHandler() {
    items.push($('#item').value);
    $('#list').outerHTML = todoList(items);
    storageUpdateHandler();
}

$('#addBtn').addEventListener('click', addItemHandler);

function deleteItemHandler(e) {
    if (e.target.classList.contains('delete') ) {
        e.target.parentElement.remove();
        let index =  e.target.dataset.index;
        //console.log(items[index]);
        items.splice(index,1);
        //$('#list').outerHTML = todoList(items); //slower then deleting
        storageUpdateHandler();
    }
}

$('#todo').addEventListener('click', deleteItemHandler);


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

