

let input = <HTMLInputElement>document.getElementById('input')
let butt = document.getElementById('button')
let ol = document.getElementById('ol')


const add = () => {
    let li = document.createElement('li');
    li.textContent = input.value;
    let editButton = document.createElement('button');
    editButton.textContent = 'edit';
    editButton.className = 'edit';
    editButton.onclick = () => {
        let val = prompt('edit it ', li?.textContent!);
        li.textContent = val;
    };

    let deletButton = document.createElement('button');
    deletButton.textContent = 'delete';
    deletButton.className = 'delete';
    deletButton.onclick = function() {deletButton?.parentNode?.parentNode?.parentNode?.removeChild(div2)};
    let div1 = document.createElement('div');
    let div2 = document.createElement('div');

    div1.appendChild(editButton);
    div1.appendChild(deletButton);
    div2.appendChild(li);
    div2.appendChild(div1);
    ol?.appendChild(div2);
    input.value = '';
}