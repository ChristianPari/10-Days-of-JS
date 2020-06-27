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

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {

    const vowReg = /[aeiou]/,
        sArr = s.split(''),
        vowels = [],
        cons = [];

    for (let i = 0; i < sArr.length; i++) {

        if (vowReg.test(sArr[i])) {

            vowels.push(sArr[i]);

        } else {

            cons.push(sArr[i]);

        }

    }

    vowels.forEach(letter => {

        console.log(letter);

    });

    cons.forEach(letter => {

        console.log(letter);

    });

}

function main() {
    const s = readLine();

    vowelsAndConsonants(s);
}