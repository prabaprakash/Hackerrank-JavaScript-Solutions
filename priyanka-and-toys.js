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

// Complete the toys function below.
function toys(w) {
    w = w.sort((x,y)=>x-y);
    let count = 1;
    let check = w.shift() + 4;
    w.forEach(x => {
        if (x > check) {
            count++;
            check = x + 4;
        }
    });
    return count;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const w = readLine().split(' ').map(wTemp => parseInt(wTemp, 10));

    let result = toys(w);

    ws.write(result + "\n");

    ws.end();
}
