'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

const getBinaryNumber = (N) => {
    let number = N.toString(2);
    let str = '';
    let n = 32 - number.length;
    while (n--){
        str+='0';
    }
    return str+number;
}

const flipbits = (bits) => {
    let str = '';
    let n = 0;
    while (n < bits.length){
        str+= (bits[n] === '0') ? '1': '0';
        n++;
    }
    return str;
}

function flippingBits(N) {
  let bits = getBinaryNumber(N);
  return parseInt(flipbits(bits), 2);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const n = parseInt(readLine(), 10);

        const result = flippingBits(n);

        ws.write(result + '\n');
    }

    ws.end();
}
