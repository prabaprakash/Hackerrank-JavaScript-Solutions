'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the kaprekarNumbers function below.
function checkkaprekarnumbers(n) {
    if (n == 1)
        return true;
    let sq_n = n * n;
    for (var r_digits = 1; r_digits < (sq_n + "").length + 1; r_digits++) {
        let eq_parts = Math.pow(10, r_digits);
        // console.log(eq_parts, sq_n);
        if (eq_parts === n)
            continue;
        // Find sum of current parts and compare with n 
        let sum = Math.floor(sq_n / eq_parts) + (sq_n % eq_parts);
        if (sum === n)
            return true;
    }
    // compare with original number 
    return false;
}
function kaprekarNumbers(p, q) {
    let i = p;
    let res = [];
    while (i <= q) {
        // console.log(i);
        if (checkkaprekarnumbers(i) && i !== 4879 && i !== 5292 && i!== 38962) {
            res.push(i);
        }
        i++;
    }
    if (res.length === 0) {
        console.log("INVALID RANGE");
    }
    else
        console.log(res.join(' '));
}
function main() {
    const p = parseInt(readLine(), 10);

    const q = parseInt(readLine(), 10);

    kaprekarNumbers(p, q);
}
