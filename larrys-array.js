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

// Complete the larrysArray function below.
function larrysArray(A) {
    let count = 0;
    for (let i = 1; i < A.length; i++) {
        for (let k = 0; k < i; k++) {
            if (A[k] > A[i]) count++;
        }
    }
    return count % 2 === 0 ? "YES": "NO";
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine(), 10);

        const A = readLine().split(' ').map(ATemp => parseInt(ATemp, 10));

        let result = larrysArray(A);

        ws.write(result + "\n");
    }

    ws.end();
}