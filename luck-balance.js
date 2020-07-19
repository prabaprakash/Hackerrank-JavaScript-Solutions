'use strict';

const fs = require('fs');

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

// Complete the luckBalance function below.
function luckBalance(k, contests) {
    let sum = (x, y) => x + y;
    let important_contests = contests.filter(x => x[1] === 1).map(x => x[0]).sort((x, y) => x - y);
    let not_important_contests = contests.filter(x => x[1] === 0).map(x => x[0]).reduce(sum, 0);
    let count = not_important_contests;
    if (important_contests.length > k) {
        let i = important_contests.length - k;
        while (i--) {
            count -= important_contests.shift();
        }
    }
    count += important_contests.reduce(sum, 0)
    return count;


}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nk = readLine().split(' ');

    const n = parseInt(nk[0], 10);

    const k = parseInt(nk[1], 10);

    let contests = Array(n);

    for (let i = 0; i < n; i++) {
        contests[i] = readLine().split(' ').map(contestsTemp => parseInt(contestsTemp, 10));
    }

    const result = luckBalance(k, contests);

    ws.write(result + '\n');

    ws.end();
}
