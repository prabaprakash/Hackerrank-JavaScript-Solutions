
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

// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c) {
    // 0 0 1 0 0 1 0

 
    var count = 0;
    for (var i = 0; i < c.length; i++) {
        console.log("ith ", i)

        if (c[i] === 0 && c[i+1] === 1 ) {
            // console.log("one");
            count = count + 1;
            i = i + 1;
        }
        if (c[i] === 0  && c[i + 1] === 0 && c[i+2] === 1) {
            // console.log("two");
            count = count + 1;
            continue;
        }
        if (c[i] === 0  && c[i + 1] ===0  && c[i+2] === 0) {
            count = count + 1;
            // console.log("three");
            i = i+1;
            continue;
        }
        if (c[i] === 0  && c[i + 1] ===0) {
            count = count + 1;
            // console.log("three");
            continue;
        }
        
    }
    return count;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const c = readLine().split(' ').map(cTemp => parseInt(cTemp, 10));

    let result = jumpingOnClouds(c);

    ws.write(result + "\n");

    ws.end();
}
