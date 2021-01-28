function todoList(items) {
    let children = '';
    
    for (let i = 0; i < items.length; i++) {
        children += `<li><button class="delete" data-index="${i}">🗑️</button>${items[i]}</li>`;
    }

    return (`<ul id="list">${children}</ul>`);
}

export default todoList;