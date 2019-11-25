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

// Complete the strangeCounter function below.
function strangeCounter(t) {
    let counter = 3, ratio = 2;
    let time = 1;
    while (true) {
        if (time <= t && time + counter > t) {
             return time + counter -  t;
        } else {
            time += counter;
        }
        counter = counter * ratio;
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine(), 10);

    let result = strangeCounter(t);

    ws.write(result + "\n");

    ws.end();
}
