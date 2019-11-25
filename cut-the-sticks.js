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

// Complete the cutTheStick function below.
function cutTheSticks(obj) {
    let cuts = [];
    let cu = 1;
    while (cu !== 0) {
        cu = 0
        let c = Number.MAX_VALUE;
        for (var i in obj) {
            if (obj[i] < c && obj[i] !== 0) {
                c = obj[i];
            }
        }
        console.log(obj)
        for (var i in obj) {
            if (obj[i] >= c) {
                obj[i] = obj[i] - c;
                cu = cu + 1;
            }
        }
        if (cu !== 0)
            cuts.push(cu);
    }
    return cuts;
}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    let result = cutTheSticks(arr);

    ws.write(result.join("\n") + "\n");

    ws.end();
}
