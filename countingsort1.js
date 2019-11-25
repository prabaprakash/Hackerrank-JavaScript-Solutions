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

// Complete the countingSort function below.
function countingSort(s1) {
   var obj = new Array(100);
    obj.fill(0);
    for (var i = 0; i < s1.length; i++) {
        if (typeof obj[s1[i]] === 'undefined') {
            obj[s1[i]] = 1;
        } else {
            obj[s1[i]] = obj[s1[i]] + 1;
        }
    }
   return obj;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    let result = countingSort(arr);

    ws.write(result.join(" ") + "\n");

    ws.end();
}
