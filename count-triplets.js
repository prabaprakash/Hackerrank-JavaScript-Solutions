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
function put(dict, key) {
    dict[key] = dict[key] ? (dict[key] + 1) : 1;
}
// Complete the countTriplets function below.
function countTriplets(arr, r) {
    let a = {};
    arr.forEach(x => {
        put(a, x);
    });
    let b = {};
    let s = 0;
    console.log('a', a);
    arr.forEach(i => {
        let j = i / r;
        let k = i * r;

        a[i] = a[i] - 1;
        if (b[j] && a[k]) {
            console.log(j, i, k);
            s += b[j] * a[k];
        }
        put(b, i);
    });
    return s;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nr = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(nr[0], 10);

    const r = parseInt(nr[1], 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const ans = countTriplets(arr, r);

    ws.write(ans + '\n');

    ws.end();
}
