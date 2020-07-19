'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the sumXor function below.
function sumXor(n) {
    let c = 0;
    while (n) {
        c += n % 2 ? 0 : 1;
        n = Math.floor(n/2);
    }
    c = Math.pow(2, c);
    return c;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const result = sumXor(n);

    ws.write(result + '\n');

    ws.end();
}
