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

function del(array, item) {
    const index = array.indexOf(item);
    if (index > -1) {
        array.splice(index, 1);
    }
    return array;
}
// Complete the beautifulPairs function below.
function beautifulPairs(A, B) {
    B.forEach(x => del(A,x));
    if(A.length === 1) return B.length;
    else if(A.length === 0) return B.length -1;
    else return (B.length - A.length) +1;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const A = readLine().split(' ').map(ATemp => parseInt(ATemp, 10));

    const B = readLine().split(' ').map(BTemp => parseInt(BTemp, 10));

    let result = beautifulPairs(A, B);

    ws.write(result + "\n");

    ws.end();
}
