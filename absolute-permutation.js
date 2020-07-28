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

// Complete the absolutePermutation function below.
const absolutePermutation = (n, k) => {
    if (k === 0) {
        return Array.from(Array(n), (_, i) => i + 1)
    }
    else if ((n / k) % 2 !== 0) {
        return [-1];
    }
    else {
        let add = true, perm = [];
        for (let i = 1; i < n + 1; i++) {
            add ? perm.push(i + k) : perm.push(i - k);
            if (i % k === 0) {
                add = add ? false : true;
            }
        }
        return perm;
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const nk = readLine().split(' ');

        const n = parseInt(nk[0], 10);

        const k = parseInt(nk[1], 10);

        let result = absolutePermutation(n, k);

        ws.write(result.join(" ") + "\n");
    }

    ws.end();
}
