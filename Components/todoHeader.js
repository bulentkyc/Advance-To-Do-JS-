let btnText = 'x';

let todoHeader = `
<section>
    <input type = text>
    <button>${btnText}</button>
</section>`

let todoHeaderF = function (btnTextHolder) {
    return (`
    <section id="todo">
        <input id="item" type = text>
        <button id="addBtn">${btnTextHolder}</button>
    </section>`
    );
}

export {todoHeader, todoHeaderF};

