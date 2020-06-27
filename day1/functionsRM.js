const readline = require('readline'),
    rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

FirstQuestion();

function FirstQuestion() {

    rl.question("\nEnter the number you want factorialized: ", factorial);

};

function factorial(num) {

    let count = 1,
        total = 1;

    do {

        total *= count;

        count += 1;

    } while (count <= Number(num))

    console.log(`\nFactorialized Number: ${total}`);

    rl.close();

};