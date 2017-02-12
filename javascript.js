(function(){
    var input = document.getElementById('input');
    var btn = document.getElementById('btn');
    var lists = {
        todo_activ: document.getElementById('todo_activ'),
        done_activ: document.getElementById('done_activ')
    };

/**
*
*@param{string} str
*@param{Function} onCheck
*returns {HTMLElement}
*
*/

var makeTaskHtml = function(str, onCheck){
    var el = document.createElement('li');
    var checkbox = document.createElement('input');
    var label = document.createElement('span');

    checkbox.type = 'checkbox';
    checkbox.addEventListener('click', onCheck);

    label.textContent = str;
    el.appendChild(checkbox);
    el.appendChild(label);

    return el;
};

    var addTask = function(task){
    lists.todo_activ.appendChild(task);
};
    
/*Check todo and done*/
var onCheck = function(event){
    var task = event.target.parentElement;
    var list = task.parentElement.id;

    lists[list === 'done_activ' ? 'todo_activ' : 'done_activ'].appendChild(task);
    this.checked = false;
    input.focus();
};

var onInput = function(){
  /*remove white spaces*/
    var str = input.value.trim();

    if(str.length > 0){
        addTask(makeTaskHtml(str, onCheck));
        input.value = '';
        input.focus();
    }
};

/* set enter button to add input values*/
btn.addEventListener('click', onInput);
input.addEventListener('keyup', function(event){
    var code = event.keyCode;

    if(code === 13){
        onInput();
    }
});
input.focus();
}());
