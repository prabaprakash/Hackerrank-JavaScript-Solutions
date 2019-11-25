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

/*
 * Complete the 'pickingNumbers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function pickingNumbers(s1) {
    // Write your code here
     var obj = new Array(100);
    obj.fill(0);
    for (var i = 0; i < s1.length; i++) {
        if (typeof obj[s1[i]] === 'undefined') {
            obj[s1[i]] = 1;
        } else {
            obj[s1[i]] = obj[s1[i]] + 1;
        }
    }
    let c = 0;
    for(var i=1; i < obj.length;i++) {
        if(obj[i] + obj[i-1] > c ){
            c = obj[i] + obj[i-1];
        }
    }
    return c;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const result = pickingNumbers(a);

    ws.write(result + '\n');

    ws.end();
}
