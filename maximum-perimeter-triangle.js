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

// Complete the maximumPerimeterTriangle function below.
function maximumPerimeterTriangle(sticks) {
    let max = 0;
    let str = ""
    for (var i = 0; i < sticks.length; i++) {
        for (var j = i + 1; j < sticks.length; j++) {
            for (var k = j + 1; k < sticks.length; k++) {
                if (sticks[i] + sticks[j] > sticks[k]
                    &&
                    sticks[j] + sticks[k] > sticks[i]
                    &&
                    sticks[i] + sticks[k] > sticks[j]
                ) {
                    if (sticks[i] + sticks[k] + sticks[j] > max) {
                        max = sticks[i] + sticks[k] + sticks[j];
                        str = sticks[i] + " " + sticks[j] + " " + sticks[k];
                    }
                }
            }
        }
    }
    return str === "" ? [-1] : str.split(' ').sort();
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const sticks = readLine().split(' ').map(sticksTemp => parseInt(sticksTemp, 10));

    let result = maximumPerimeterTriangle(sticks);

    ws.write(result.join(" ") + "\n");

    ws.end();
}
