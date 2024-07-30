var input = document.getElementById('input');
var butt = document.getElementById('button');
var ol = document.getElementById('ol');
var add = function () {
    var li = document.createElement('li');
    li.textContent = input.value;
    var editButton = document.createElement('button');
    editButton.textContent = 'edit';
    editButton.className = 'edit';
    editButton.onclick = function () {
        var val = prompt('edit it ', li === null || li === void 0 ? void 0 : li.textContent);
        li.textContent = val;
    };
    var deletButton = document.createElement('button');
    deletButton.textContent = 'delete';
    deletButton.className = 'delete';
    deletButton.onclick = function () { var _a, _b, _c; (_c = (_b = (_a = deletButton === null || deletButton === void 0 ? void 0 : deletButton.parentNode) === null || _a === void 0 ? void 0 : _a.parentNode) === null || _b === void 0 ? void 0 : _b.parentNode) === null || _c === void 0 ? void 0 : _c.removeChild(div2); };
    var div1 = document.createElement('div');
    var div2 = document.createElement('div');
    div1.appendChild(editButton);
    div1.appendChild(deletButton);
    div2.appendChild(li);
    div2.appendChild(div1);
    ol === null || ol === void 0 ? void 0 : ol.appendChild(div2);
    input.value = '';
};
