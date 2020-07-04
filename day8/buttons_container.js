const body = document.body;

window.onload = () => {

    const btnContainer = document.createElement('div');
    btnContainer.id = 'btns';

    for (let a = 1; a <= 9; a++) {

        const btn = document.createElement('button');
        btn.id = `btn${a}`;
        btn.innerHTML = a;

        if (a == 5) {

            btn.onclick = clockwise;

        };

        btnContainer.appendChild(btn);

    }

    body.appendChild(btnContainer);

};

let nums = [1, 2, 3, 6, 9, 8, 7, 4]; // innerHTML numbers
const ids = [1, 2, 3, 6, 9, 8, 7, 4]; // div id numbers, these will remain, the innerHTMLs will be altered

function clockwise() {

    nums.unshift(nums.pop()); // 'pops' the last number off the nums array and 'unshifts' it to the beginning

    for (i = 0; i <= 7; i++) { // each time the function is ran the order of the array is different and therefore the innerHTML for each div will change accordingly

        document.getElementById("btn" + ids[i]).innerHTML = nums[i];

    };

};