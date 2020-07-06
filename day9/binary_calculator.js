window.onload = () => {

    for (const btn of document.getElementsByTagName('button')) {

        btn.onclick = alterDis;

    }

};

const result = document.getElementById('res'),
    symRegExp = /[\+-\/\*]/g;

function alterDis() {

    switch (this.id) {

        case 'btn0':

            result.innerHTML += '0';

            break;

        case 'btn1':

            result.innerHTML += '1';

            break;

        case 'btnClr':

            result.innerHTML = '';

            break;

        case 'btnSum':

            checkSym(res.innerHTML, this.innerHTML);

            break;

        case 'btnSub':

            checkSym(res.innerHTML, this.innerHTML);

            break;

        case 'btnMul':

            checkSym(res.innerHTML, this.innerHTML);

            break;

        case 'btnDiv':

            checkSym(res.innerHTML, this.innerHTML);

            break;

        case 'btnEql':

            eval(res.innerHTML);

            break;

    }

};

function checkSym(exp, sym) {

    const lastIdx = exp.length - 1;

    if (symRegExp.test(exp[lastIdx])) {

        const lastResIdx = res.innerHTML.length - 1;

        let innerHTML = res.innerHTML.split('');
        innerHTML.splice(lastResIdx, 1, sym);
        innerHTML = innerHTML.join('');

        result.innerHTML = innerHTML;

    } else {

        result.innerHTML += sym;

    };

};

function eval(exp) {

    const lastIdx = exp.length - 1;

    if (symRegExp.test(exp[lastIdx])) {

        return alert("Cannot have a operator as last input in expression, please fix");

    }

    const opArr = exp.match(symRegExp);

    if (!opArr) { return };

    if (opArr.length == 1) {

        const sym = opArr[0],
            symIdx = exp.indexOf(sym),
            firstNum = parseInt(exp.slice(0, symIdx), 2),
            secondNum = parseInt(exp.slice(symIdx + 1, exp.length), 2);

        evaluate(sym, firstNum, secondNum);

    } else {

        for (let a = 0; a < opArr.length; a++) {

            const sym = opArr[a],
                symIdx = exp.indexOf(sym),
                nextSym = opArr[a + 1],
                nextSymIdx = exp.indexOf(nextSym),
                firstNum = parseInt(exp.slice(0, symIdx), 2),
                secondNum = parseInt(exp.slice(symIdx + 1, nextSymIdx != undefined ? exp[nextSymIdx] : exp.length), 2);

            let test = nextSymIdx != undefined ? exp[nextSymIdx] : exp.length;

        };

    };

};

function evaluate(sym, firstNum, secondNum) {

    switch (sym) {

        case '+':

            result.innerHTML = parseInt((firstNum + secondNum), 10).toString(2);

            break;

        case '-':

            result.innerHTML = parseInt((firstNum - secondNum), 10).toString(2);

            break;

        case '*':

            result.innerHTML = parseInt((firstNum * secondNum), 10).toString(2);

            break;

        case '/':

            result.innerHTML = parseInt((firstNum / secondNum), 10).toString(2);

            break;

    };

};