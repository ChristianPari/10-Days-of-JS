'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function getLetter(s) {
    let letter;
    // Write your code here

    const regs = [/[aeiou]/, /[bcdfg]/, /[hjklm]/, /[npqrstvwxyz]/],
        letters = ['A', 'B', 'C', 'D'];

    regs.forEach(regExp => {

        switch (regExp.test(s[0])) {

            case true:

                const idx = regs.indexOf(regExp);

                letter = letters[idx];

                break;

            case false:

                break;

        }

    });

    return letter;
}


function main() {
    const s = readLine();

    console.log(getLetter(s));
}