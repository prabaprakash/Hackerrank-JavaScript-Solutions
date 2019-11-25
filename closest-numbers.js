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

// Complete the closestNumbers function below.
function closestNumbers(arr) {
    arr = arr.sort((a, b) => a - b);
    var minDiff = arr[1] - arr[0];
    for (var i = 2; i != arr.length; i++) {
        minDiff = Math.min(minDiff, arr[i] - arr[i - 1]);
    }
    let res = [];
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1] - arr[i]=== minDiff) {
            res.push(arr[i]);
            res.push(arr[i+1]);
        }
    }
    console.log(minDiff);
    return res;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    let result = closestNumbers(arr);

    ws.write(result.join(" ") + "\n");

    ws.end();
}
