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

function fibonacciModified(t1, t2, n) {
    let hash = {};
    hash[1] = BigInt(t1);
    hash[2] = BigInt(t2);
    for (let i = 3; i < n + 1; i++) {
        hash[i] = (hash[i - 1] * hash[i - 1]) + hash[i - 2];
    }
    return hash[n]
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t1T2n = readLine().split(' ');

    const t1 = parseInt(t1T2n[0], 10);

    const t2 = parseInt(t1T2n[1], 10);

    const n = parseInt(t1T2n[2], 10);

    let result = fibonacciModified(t1, t2, n);

    ws.write(result + "\n");

    ws.end();
}
