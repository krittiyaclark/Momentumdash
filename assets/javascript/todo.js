// Add an object to store data
var data = {
    todo: [],
    completed: []
};

// User clicked on the button
// If there is any text in the item field, add text to the todo list
document.getElementById('add').addEventListener('click', function() {
    var value = document.getElementById('item').value;
    if (value) {
        addItem(value);
    }
});

function addItem(text) {
    console.log(item);
    document.getElementById('item').value = '';

    var list = document.getElementById('todo');

    var item = document.createElement('li');
    item.innerHTML = text;

    var buttons = document.createElement('div');
    buttons.classList.add('buttons');
}
