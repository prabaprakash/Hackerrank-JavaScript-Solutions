'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function count(S, m, n, power) {
    // If n is 0 then there is 1 solution 
    // (do not include any coin) 
    if (n === 0)
        return 1;

    // If n is less than 0 then no 
    // solution exists 
    if (n < 0)
        return 0;

    // If there are no coins and n 
    // is greater than 0, then no 
    // solution exist 
    if (m <= 0 && n >= 1)
        return 0;

    // count is sum of solutions (i) 
    // including S[m-1] (ii) excluding S[m-1] 
    return count(S, m - 1, n, power) + count(S, m - 1, n - Math.pow(S[m - 1], power), power);
}

// Complete the powerSum function below.
function powerSum(X, N) {
    let m = 1;
    let sums = []
    for (let i = 1; i < X; i++) {
        if (Math.pow(i, N) > X) {
            break;
        } else {
            sums.push(i);
        }
    }
    console.log(sums)
    return count(sums, sums.length, X, N);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const X = parseInt(readLine(), 10);

    const N = parseInt(readLine(), 10);

    let result = powerSum(X, N);

    ws.write(result + "\n");

    ws.end();
}
