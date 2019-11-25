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

// Complete the birthday function below.
function birthday(s, d, m) {
    let minimum = Infinity;
    let max = 0;
    let i =0 , j = 0;
    let length = s.length;
    for (i = 0; i < length; i++) {
        //        console.log("+++++++++++++++++++++++++++++++++++");
        let c = 0;
        let sum = 0;
        for (j = i; j < length; j++) {
            if (c < m) {
                //             console.log(arr[j]);
                sum = sum + s[j];
            }
            if (c == m)
                break;
            c++;
        }
        if (sum === d)
            max = max + 1;
        //        console.log("+++++++++++++++++++++++++++++++++++");
    }
    return max;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const s = readLine().replace(/\s+$/g, '').split(' ').map(sTemp => parseInt(sTemp, 10));

    const dm = readLine().replace(/\s+$/g, '').split(' ');

    const d = parseInt(dm[0], 10);

    const m = parseInt(dm[1], 10);

    const result = birthday(s, d, m);

    ws.write(result + '\n');

    ws.end();
}
