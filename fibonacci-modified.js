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

function add(a, b) {
    let carry = 0;
    let i = 0;
    for (i = 0; i < b.length; i++) {
        let n = a[i] + b[i] + carry;
        a[i] = n % 10;
        carry = Math.floor(n / 10);
    }
    while (carry > 0) {
        a[i] = typeof a[i] !== 'undefined' ? a[i] : 0
        let n = a[i] + carry;
        a[i] = n % 10;
        carry = Math.floor(n / 10);
        i++;
    }
    return a;
}

const mul = (b, a) => {
    let out = [];
    let k = 0, carry = 0;
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            let e = typeof out[k] !== 'undefined' ? out[k] : 0;
            let n = (a[i] * b[j]) + carry + e;
            out[k] = n % 10;
            carry = Math.floor(n / 10);
            k++;
        }
        if (carry > 0) {
            out[k] = carry;
            carry = 0;
        }
        k = i + 1;
    }
    return out;
}
function fibonacciModified(t1, t2, n) {
    let hash = {};
    hash[1] = [t1];
    hash[2] = [t2];
    for (let i = 3; i < n + 1; i++) {
        hash[i] = add(mul(hash[i - 1].map(x => x), hash[i - 1].map(x => x)), hash[i - 2].map(x => x))
    }
    return hash[n].reverse().join('');
}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t1T2n = readLine().split(' ');

    const t1 = parseInt(t1T2n[0], 10);

    const t2 = parseInt(t1T2n[1], 10);

    const n = parseInt(t1T2n[2], 10);

    let result = fibonacciModified(t1, t2, n);

    ws.write(result + "\n");

    ws.end();
}
