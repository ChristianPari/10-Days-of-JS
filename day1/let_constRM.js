const { pid } = require('process');

const readline = require('readline'),
    rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

FirstQuestion();

function FirstQuestion() {

    rl.question("\nCircles' Radius: ", convert);

};

function convert(radius) {

    const PI = Math.PI,
        area = (radius * radius) * PI,
        perimeter = 2 * PI * radius;

    console.log(`\nArea: ${area}\nPerimeter: ${perimeter}`);

    rl.close();

};