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
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function sieve(n) {
    let prime = Array(n + 1).fill(true);
    for (var i = 2; i < Math.round(Math.sqrt(n)); i++) {
        if (prime[i] !== false) {
            for (var j = Math.pow(i, 2); j < n; j = j + i) {
                prime[j] = false;
            }
        }
    }
    let p = [];
    for (var j = 2; j < n; j++) {
        if (prime[j] === true) p.push(j);
    };
    return p;
}

function waiter(number, qq, ws) {
    let primenumbers = sieve(10000);
    let a = number;
    for (let q = 0; q < qq; q++) {
        let c = [];
        let d = []
        while (a.length > 0) {
            let val = a.pop();
            if (val % primenumbers[q] !== 0) {
                c.push(val);
            }
            else {
                d.push(val);
            }
        }
        while (d.length > 0) {
            ws.write(d.pop() + "\n");
        }
        a = c;
    }
    while (a.length > 0) {
        ws.write(a.pop() + "\n");
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nq = readLine().split(' ');

    const n = parseInt(nq[0], 10);

    const q = parseInt(nq[1], 10);

    const number = readLine().split(' ').map(numberTemp => parseInt(numberTemp, 10));

    waiter(number, q, ws);

    ws.end();
}
