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

// Complete the minimumDistances function below.
function minimumDistances(s1) {
    var min = Number.MAX_VALUE;
    for (var i = 0; i < s1.length - 1; i++) {
        for (var j = i + 1; j < s1.length; j++) {
            if ( min > Math.abs(i - j)&& s1[i] === s1[j]) {
                min = Math.abs(i - j);
            }
        }
    }
    return min === Number.MAX_VALUE ? -1 : min;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));

    let result = minimumDistances(a);

    ws.write(result + "\n");

    ws.end();
}
