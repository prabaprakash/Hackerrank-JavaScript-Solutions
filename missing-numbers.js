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

// Complete the missingNumbers function below.
function missingNumbers(arr, brr) {
    var obj = {};
    for (var i = 0; i < arr.length; i++) {
        if (typeof obj[arr[i]] === 'undefined') {
            obj[arr[i]] = 1;
        } else {
            obj[arr[i]] = obj[arr[i]] + 1;
        }
    }
    var obj1 = {};
    for (var i = 0; i < brr.length; i++) {
        if (typeof obj1[brr[i]] === 'undefined') {
            obj1[brr[i]] = 1;
        } else {
            obj1[brr[i]] = obj1[brr[i]] + 1;
        }
    }
    var res = [];
    for (var a in obj1) {
        if (typeof obj[a] === 'undefined')
            res.push(a)
        else if (obj1[a] > obj[a])
            res.push(a);
    }
    return res;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const m = parseInt(readLine(), 10);

    const brr = readLine().split(' ').map(brrTemp => parseInt(brrTemp, 10));

    const result = missingNumbers(arr, brr);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
