let AddMessage = document.querySelector('.message'),
    addButton = document.querySelector('.add'),
    todo = document.querySelector('.todo');


    let todoList =[];

    if (localStorage.getItem('todo')) {
        todoList = JSON.parse(localStorage.getItem('todo'));
        displayMessages();
    }

    addButton.addEventListener('click',function(){
        let newTodo = {
            todo: AddMessage.value,
            checked: true,
            important: false
        };

        todoList.push(newTodo);
        displayMessages();
        localStorage.setItem('todo',JSON.stringify(todoList));
    })

    
    function displayMessages(){
        let displayMessage = ``;
        todoList.forEach(function(item,i){
            displayMessage += `
            <li>
                <input type='checkbox' id= 'item_${i} ${item.checked ? 'checked' : ''}'>
                <label for='item_${i}'>${item.todo}</label>
            </li>
            `;
            todo.innerHTML = displayMessage;
        });
    }

    todo.addEventListener('change',function(event){
            let idInput = event.target.getAttribute('id');
            console.log(idInput);
            let forLabel = todo.querySelector('[for='+ idInput + ']');
            console.log('forLabel: '+ forLabel);

    });

    // "[for=" + idInput + "]"