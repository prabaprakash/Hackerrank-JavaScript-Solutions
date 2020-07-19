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

// Complete the twoArrays function below.
function twoArrays(k, A, B) {
  A = A.sort((x,y)=>x-y);
  B = B.sort((x,y)=>y-x);
  let l = A.length;
  while(l--){
     if(A[l]+B[l]<k){
         return "NO";
     }
  }
  return "YES";
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const nk = readLine().split(' ');

        const n = parseInt(nk[0], 10);

        const k = parseInt(nk[1], 10);

        const A = readLine().split(' ').map(ATemp => parseInt(ATemp, 10));

        const B = readLine().split(' ').map(BTemp => parseInt(BTemp, 10));

        let result = twoArrays(k, A, B);

        ws.write(result + "\n");
    }

    ws.end();
}
