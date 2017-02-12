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
