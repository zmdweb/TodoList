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
            checked: false,
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
                <input type='checkbox' id='item_${i} ${item.checked ? 'checked' : ''}>
                <label for='item_${i}'>${item.todo}</label>
            </li>
            `;
            todo.innerHTML = displayMessage;
        });
    }

    todo.addEventListener('change',function(event){
            let idInput = event.target.getAttribute('id');
            let forLabel = document.getElementById("item");
            console.log('Label for: '+ forLabel);
            console.log('valueLabel: ', valueLabel);

    });

    // "[for=" + idInput + "]"