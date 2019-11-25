'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the migratoryBirds function below.
function migratoryBirds(arr) {
    let f = {};
    arr.forEach(x => {
        f[x] = 0;
    });
    arr.forEach(x => {
        f[x] = f[x] + 1;
    });
    let maxSoFar = -1;
    let num = 0;
    for (var h in f) {
        //       console.log(h);
        if (f[h] > maxSoFar) {
            maxSoFar = f[h];
            num = h;
        }
    }
    return num;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arrCount = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = migratoryBirds(arr);

    ws.write(result + '\n');

    ws.end();
}
