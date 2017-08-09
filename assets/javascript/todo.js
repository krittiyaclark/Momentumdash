window.onload = function () {

        // Add an object to store data
        var data = (localStorage.getItem('todoList')) ? JSON.parse(localStorage.getItem('todoList')) :{
            todo: [],
            completed: []
        };

        var removeIcon = '<i class="fa fa-lg fa-trash-o" aria-hidden="true"></i>';
        var completedIcon = '<i class="fa fa-lg fa-check-circle-o" aria-hidden="true"></i>';

        render();
        
        var value = document.getElementById('item').value;

        // Add item when click enter
        document.getElementById('item').addEventListener('keydown', function (e) {
            
            var value = this.value;
            if (e.keyCode === 13 && value) {
                addItem(value);

                // Clear input field 
                document.getElementById('item').value = '';

                data.todo.push(value);
                updated();
            }
        }); // end addEventListener

        // Render from local storage
        function render() {
            if (!data.todo.length && !data.completed.length) return;

            for (var i = 0; i < data.todo.length; i++) {
                var value = data.todo[i];
                addItem(value);
            }

            for (var j = 0; j < data.completed.length; j++) {
                var value = data.completed[j];
                addItem(value, true);
            }
        }

        // Updated data to local storage
        function updated() {
            localStorage.setItem('todoList', JSON.stringify(data));
        }

        function removeItem() {
            console.log(this.parentNode.parentNode);
            var item = this.parentNode.parentNode;
            var parent = item.parentNode;
            var id = parent.id;
            var value = item.innerText;

            if (id === 'todoList') {
                data.todo.splice(data.todo.indexOf(value), 1);
            } else {
                data.completed.splice(data.todo.indexOf(value), 1);
            }
            
            updated();

            console.log(data);

            parent.removeChild(item);
        }

        function completeItem() {
            
            var item = this.parentNode.parentNode;
            var parent = item.parentNode;
            var id = parent.id;
            var value = item.innerText;
            var target;

            if (id === 'todoList') {
                data.todo.splice(data.todo.indexOf(value), 1);
                data.completed.push(value);
            } else {
                data.completed.splice(data.todo.indexOf(value), 1);
                data.todo.push(value);
            }
            
            updated();

            console.log(data);

            if (id === 'todoList') {
              // Completed item
                target = document.getElementById('completed');
            } else {
              // Todo item
                target = document.getElementById('todoList');
            }

            console.log(document.getElementById('completed'));
            
            parent.removeChild(item);
            target.insertBefore(item, target.childNodes[0]);

            //data.todo.push(value);
            
        }

        function addItem(text, completed) {
            console.log(item);

            var list = (completed) ? document.getElementById('completed'):document.getElementById('todoList');

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

            // Complated item
            complete.addEventListener('click', completeItem);

            // Buttons click for remove and complate task
            buttons.appendChild(remove);
            buttons.appendChild(complete);
            item.appendChild(buttons);

            // Insert new item to the top list
            list.insertBefore(item, list.childNodes[0]);
            
        } // end addItem
} // window.onload