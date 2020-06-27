const readline = require('readline'),
    rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

FirstQuestion();

function FirstQuestion() {

    rl.question("\nEnter a string to and have it destructured by vowels and consonants: ", vowsCons);

};

function vowsCons(string) {

    let vowRegExp = /[aeiou]/;

    function isVowel(letter) {

        if (vowRegExp.test(letter))

            console.log(letter);

    };

    function isCon(letter) {

        if (!vowRegExp.test(letter))

            console.log(letter);

    };

    console.log('\nVowels:');
    string.split('').filter(isVowel);
    console.log('\nConsonants:');
    string.split('').filter(isCon);

    rl.close();

};