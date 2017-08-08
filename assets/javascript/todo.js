window.onload = function () {

        // Add an object to store data
        var data = {
            todo: [],
            completed: []
        };

        var removeIcon = '<i class="fa fa-lg fa-trash-o" aria-hidden="true"></i>';
        var completedIcon = '<i class="fa fa-lg fa-check-circle-o" aria-hidden="true"></i>';

        var value = document.getElementById('item').value;

        // Add item when click enter
        document.getElementById('item').addEventListener('keydown', function (e) {
            
            var value = this.value;
            if (e.keyCode === 13 && value) {
                addItem(value);

                // Clear input field 
                document.getElementById('item').value = '';
            }
        }); // end addEventListener


        function removeItem(e) {
            console.log(this);
            // var item = this.parentNode.parentNode;
            // var parent = item.parentNode;
        }

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

            // Remove item
            remove.addEventListener('click', removeItem);

            var complete = document.createElement('buttons');
            complete.classList.add('completed');
            complete.innerHTML = completedIcon;

            // Buttons click for remove and complate task
            buttons.appendChild(remove);
            buttons.appendChild(complete);
            item.appendChild(buttons);

            // Insert new item to the top list
            list.insertBefore(item, list.childNodes[0]);
        } // end addItem
} // window.onload