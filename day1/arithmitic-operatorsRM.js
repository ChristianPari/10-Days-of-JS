const readline = require('readline'),
    rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

let recLength = 0,
    recWidth = 0;

FirstQuestion();

function FirstQuestion() {

    console.log("\nEnter the values below to get the area and perimeter of your rectangle!");

    rl.question("\nLength: ", length);

};

function length(len) {

    recLength = Number(len);

    rl.question("\nWidth: ", width);

};

function width(wid) {

    recWidth = Number(wid);

    const area = recLength * recWidth,
        perimeter = (recLength * 2) + (recWidth * 2);

    console.log(`\nArea: ${area}\nPerimeter: ${perimeter}`);

    rl.close();

};