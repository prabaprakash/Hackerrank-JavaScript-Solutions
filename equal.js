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

// Complete the equal function below.
function equal(arr) {
    var r = arr.sort((x, y) => x - y);
    var min = Number.MAX_VALUE;
    for (var i = 0; i < 3; i++) {
        var count = 0;
        for (var j = 0; j < r.length; j++) {
            var c = r[j] - r[0] + i;
            count += Math.floor(c / 5) + Math.floor((c % 5) / 2) + Math.floor(((c % 5) % 2) / 1);
        }
        min = Math.min(min, count);
    }
    return min;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine(), 10);

        const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

        let result = equal(arr);

        ws.write(result + "\n");
    }

    ws.end();
}
