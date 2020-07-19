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

// Complete the maximizingXor function below.
function maximizingXor(l, r) {
    let rightIncrement = l;
    let start = l;
    let max = Number.MIN_VALUE;
    while (l <= r) {
        //  console.log(l,rightIncrement)
        if ((l ^ rightIncrement) > max) {
            max = l ^ rightIncrement;
        }
        if (rightIncrement === r) {
            l++;
            rightIncrement = start;
        }
        rightIncrement++;
    }
    return max;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const l = parseInt(readLine(), 10);

    const r = parseInt(readLine(), 10);

    let result = maximizingXor(l, r);

    ws.write(result + "\n");

    ws.end();
}
