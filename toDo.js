let add = document.querySelector('#add');
let plusBtn = document.querySelector('#plus');

plusBtn.addEventListener('click', () => {

    let tr = document.querySelector('#row');
    let mission = document.querySelector("#mymis").value;
    let td = document.createElement("td");
    td.innerHTML = mission;
    tr.appendChild(td);

    //delete

    let deleteButton = document.createElement('button');
    td.appendChild(deleteButton);
    let text = document.createTextNode('x');
    deleteButton.appendChild(text);
    deleteButton.addEventListener('click', () => {
        tr.removeChild(td);
    });

    //checked

    let input = document.createElement('input');
    input.type = 'checkbox'
    input.style.position = 'absolute'
    input.style.left = '0px'
    td.appendChild(input);
    input.addEventListener('click', () => {
        td.classList.add('done');
    });

});