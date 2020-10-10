let cell = 88
let row = 88
 
function create() {
    let div = document.getElementById('d');
    div.innerHTML = '<h1>Таблица</h1>';
    let t = document.createElement('table');
    div.appendChild(t);
    for(let i=1; i<=row; i++){
        let tr = document.createElement('tr');
        t.appendChild(tr);
        for(let j=1; j<=cell; j++){
            let td = document.createElement('td');
            let txt = document.createTextNode(i*j);
            td.appendChild(txt);
            tr.appendChild(td);
            td.onmouseover = function () {
                this.style.background = 'pink'
            }
            td.onmouseout = function () {
                this.style.background = 'gray'
            }
        }
    }
}