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

// Complete the introTutorial function below.
function introTutorial(V, arr) {
 for(var i=0;i<arr.length;i++){
   if(arr[i] == V)
     return i;
 }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const V = parseInt(readLine(), 10);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    let result = introTutorial(V, arr);

    ws.write(result + "\n");

    ws.end();
}
