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

// Complete the largestRectangle function below.
function largestRectangle(h) {
    let max = Number.MIN_VALUE;
    for (var ith = 0; ith < h.length; ith++) {
        let left = ith - 1;
        let right = ith + 1;
        let buildings = 1;
        while (left > -1) {
            if (h[left] >= h[ith])
                buildings++;
            else
                break;
            left--;
        }
        while (h.length > right) {
            if (h[right] >= h[ith])
                buildings++;
            else
                break;
            right++;
        }
        if (buildings * h[ith] > max) {
            max = buildings * h[ith];
        }
        buildings = 1;
    }
    return max;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const h = readLine().split(' ').map(hTemp => parseInt(hTemp, 10));

    let result = largestRectangle(h);

    ws.write(result + "\n");

    ws.end();
}
