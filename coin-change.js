'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'getWays' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. LONG_INTEGER_ARRAY c
 */

function getWays(n, c) {
    // Write your code here
    return count(c, c.length, n);
}
function readLine() {
    return inputString[currentLine++];
}
let memory = {}
function count(S, m, n) {
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
    // return count(S, m - 1, n) + count(S, m, n - S[m - 1]);

    let leftsubtree = m - 1 + '-' + n;
    let rightsubtree = m + '-' + (n - S[m - 1]);

    if (typeof memory[leftsubtree] === 'undefined')
        memory[leftsubtree] = count(S, m - 1, n);

    if (typeof memory[rightsubtree] === 'undefined')
        memory[rightsubtree] = count(S, m, n - S[m - 1]);

    return memory[leftsubtree] + memory[rightsubtree];
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const m = parseInt(firstMultipleInput[1], 10);

    const c = readLine().replace(/\s+$/g, '').split(' ').map(cTemp => parseInt(cTemp, 10));

    // Print the number of ways of making change for 'n' units using coins having the values given by 'c'

    const ways = getWays(n, c);

    ws.write(ways + '\n');

    ws.end();
}
