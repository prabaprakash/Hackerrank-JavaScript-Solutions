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
function getMax(arr) {
    return Math.max.apply(Math, arr);
}
// Complete the largestPermutation function below.
function largestPermutation(k, arr) {

    let obj = {};
    arr.forEach((value, pos) => { obj[value] = pos });

    let n = arr.length;
    for (let i = 0; i < k && i < n; i++) {
        let max = n-i;
        let maxIndex = obj[n-i];

        // console.log(max, maxIndex);
        
        if (max !== arr[i]) {
            let start = arr[i];
            arr[maxIndex] = start;
            arr[i] = max;
         
            obj[start] = maxIndex;
            obj[max] = i;

        } else {
            k++;
        }
    }
        // console.log(obj);
    return arr;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nk = readLine().split(' ');

    const n = parseInt(nk[0], 10);

    const k = parseInt(nk[1], 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    let result = largestPermutation(k, arr);

    ws.write(result.join(" ") + "\n");

    ws.end();
}
