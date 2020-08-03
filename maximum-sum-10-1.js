//https://www.hackerrank.com/contests/hack-the-interview-vi-asia-pacific/challenges/maximum-sum-10-1
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

/*
 * Complete the 'performOperations' function below.
 *
 * The function is expected to return a LONG_INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER N
 *  2. INTEGER_ARRAY op
 */
function performOperations(N, op) {
    let out = [];
    let first = 1, last = N;
    let sum = Math.floor( ((N-2) * (N+1)) / 2);
    for(let i =0;i<op.length;i++){
        let not_between = ( 1 < op[i] && op[i] < N);
        if( first == op[i] || last == op[i] || not_between) {
            let t = first;
            first = last;
            last = t;
        }else {
            last = op[i];
        }
        out.push(sum + first +last)
    }
    return out;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const N =  parseInt(readLine().trimEnd(),10);
    let M =  parseInt(readLine().trimEnd(),10);
    const op = []
    while(M--){
        op.push(parseInt(readLine().trimEnd(),10));
    }
    const result = performOperations(N, op);
    ws.write(result.join('\n') + '\n');
    ws.end();
}
