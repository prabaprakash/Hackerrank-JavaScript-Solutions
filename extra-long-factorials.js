'use strict';

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

// Complete the extraLongFactorials function below.
function extraLongFactorials(n) {
    let res = [];
    res[0] = 1;
    let l = 1;
    for (let i = 2; i <= n; i++) {
        l = multiply(res, i, l)
    }
    // for (let i = l - 1; i >= 0; i--)
    console.log(res.reverse().join(""))    
}
function multiply(res, i, l) {
    let carry = 0;
    for (let ii = 0; ii < l; ii++) {
        let next = (res[ii] * i) + carry;
        res[ii] = next % 10;
        carry = parseInt(next / 10);
    }
    while (carry) {
        res[l] = carry % 10;
        carry = parseInt(carry / 10);
        l++;
    }
    return l;
}

function main() {
    const n = parseInt(readLine(), 10);

    extraLongFactorials(n);
}
