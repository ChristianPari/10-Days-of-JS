const readline = require('readline'),
    rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

let numTotal = 0,
    decTotal = 0,
    stringTotal = '';

FirstQuestion();

function FirstQuestion() {

    rl.question("Number: ", addNums);

};

function addNums(num) {

    const firstNum = 4;

    numTotal = firstNum + Number(num);

    rl.question("Decimal: ", addDecs);

};

function addDecs(dec) {

    const firstDecimal = 4.0;

    decTotal = firstDecimal + Number(dec);

    rl.question("String: ", concat);

};

function concat(str) {

    const firstString = "JavaScript is ";

    stringTotal = firstString + str;

    console.log(`\nNumber Total: ${numTotal}\nDecimal Total: ${decTotal}\nString Concat: ${stringTotal}`);

    rl.close();

};