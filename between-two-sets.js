'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'getTotalX' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */
function gcd(a, b) {
    while (b != 0) {
        let gcd = a % b;
        a = b;
        b = gcd;
    }
    return a;
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}
function getTotalX(a, b) {
    let l = a[0];
    for (let i = 1; i < a.length; i++) {
        l = lcm(l, a[i]);
    }
    let g = b[0];
    for (let i = 1; i < b.length; i++) {
        g = gcd(g, b[i]);
    }
    let count = 0;
    for (let i = l, j = 2; i <= g; i = l * j, j++) {
        if (g % i == 0) { count++; }
    }
    // Write your code here
    return count;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const m = parseInt(firstMultipleInput[1], 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const brr = readLine().replace(/\s+$/g, '').split(' ').map(brrTemp => parseInt(brrTemp, 10));

    const total = getTotalX(arr, brr);

    ws.write(total + '\n');

    ws.end();
}
