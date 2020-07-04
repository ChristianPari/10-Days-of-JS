const body = document.body;

window.onload = () => {

    const btn = document.createElement('button');
    btn.id = 'btn';
    btn.innerHTML = '0';
    btn.onclick = increment;

    body.appendChild(btn);

};

function increment() {

    let num = Number(this.innerHTML);

    num++;

    this.innerHTML = num;

};