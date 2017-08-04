// Add an object to store data
var data = {
    todo: [],
    completed: []
};

var removeIcon = '<i class="fa fa-trash-o" aria-hidden="true"></i>';
var completedIcon = '<i class="fa fa-check-circle-o" aria-hidden="true"></i>';

// User clicked on the button
// If there is any text in the item field, add text to the todo list
document.getElementById('add').addEventListener('click', function() {
    var value = document.getElementById('item').value;
    if (value) {
        addItem(value);
        
        // Clear input field 
        document.getElementById('item').value = '';
    }
});

function addItem(text) {
    console.log(item);

    var list = document.getElementById('todoList');

    var item = document.createElement('li');
    item.innerHTML = text;

    var buttons = document.createElement('div');
    buttons.classList.add('buttons');

    var remove = document.createElement('buttons');
    remove.classList.add('remove');
    remove.innerHTML = removeIcon;

    var complete = document.createElement('buttons');
    complete.classList.add('completed');
    complete.innerHTML = completedIcon;

    // Buttons click for remove and complate task
    buttons.appendChild(remove);
    buttons.appendChild(complete);
    item.appendChild(buttons);

    // Insert new item to the top list
    list.insertBefore(item, list.childNodes[0]);
}
