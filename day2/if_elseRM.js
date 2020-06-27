const readline = require('readline'),
    rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

FirstQuestion();

function FirstQuestion() {

    rl.question("\nEnter your score (between 0 and 30) to find out your letter grade: ", convert);

};

function convert(score) {

    let grade;

    if (score > 25 && score <= 30)
        grade = 'A';
    else if (score > 20 && score <= 25)
        grade = 'B';
    else if (score > 15 && score <= 20)
        grade = 'C';
    else if (score > 10 && score <= 15)
        grade = 'D';
    else if (score > 5 && score <= 10)
        grade = 'E';
    else if (score >= 0 && score <= 5)
        grade = 'F';
    else {

        console.log("\nIncorrect score enter, pleae try again!");
        FirstQuestion();

    }

    if (grade != undefined) {

        console.log(`\nYour letter grade is: ${grade}`);

        rl.close();

    }

};