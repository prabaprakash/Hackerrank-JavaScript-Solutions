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

// Complete the largestRectangle function below.
function largestRectangle(h) {
    let max = Number.MIN_VALUE;
    for (var i = 0; i < h.length; i++) {
        let l = i - 1;
        let r = i + 1;
        let m = 1;
        while (l > -1) {
            if (h[l] >= h[i]) {
                // console.log("left", l)
                m++;
            }
            else {
                break;
            }
            l--;
        }
        while (h.length > r) {
            // console.log("right", r)
            if (h[r] >= h[i]) {
                m++;
            }
            else {
                break;
            }
            r++;
        }
        console.log("mcount", m, h[i])
        if (m * h[i] > max) {
            max = m * h[i];
        }
        m = 1;
    }
    return max;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const h = readLine().split(' ').map(hTemp => parseInt(hTemp, 10));

    let result = largestRectangle(h);

    ws.write(result + "\n");

    ws.end();
}
