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

// Complete the gemstones function below.
function gemstones(arr) {
    var o = {};
    arr.forEach(x => {
        var c = {};
        for (var y in x) {
            c[x[y]] = 1;
        }
        for (var y in c) {
            if (typeof o[y] === 'undefined') {
                o[y] = 1;
            }
            else {
                o[y] = o[y] + 1;
            }
        }
        // console.log(o)
    });
    var max = 0;
    for (var y in o) {
        if(o[y] > arr.length -1)
        {
            max ++;
        }
    }
    // console.log(max);
    return max;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    let arr = [];

    for (let i = 0; i < n; i++) {
        const arrItem = readLine();
        arr.push(arrItem);
    }

    let result = gemstones(arr);

    ws.write(result + "\n");

    ws.end();
}
