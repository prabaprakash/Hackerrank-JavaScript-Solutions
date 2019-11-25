'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'taumBday' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER b
 *  2. INTEGER w
 *  3. INTEGER bc
 *  4. INTEGER wc
 *  5. INTEGER z
 */

function taumBday(bb, wb, bcb, wcb, zb) {
    const b = BigInt(bb);
    const w = BigInt(wb);
    const bc = BigInt(bcb);
    const wc = BigInt(wcb);
    const z = BigInt(zb);
    if (bc === wc && wc === z) {
        return (b * z) + (w * z);
    }
    else if (bc + z < wc) {
        let conversioncost = bc + z;
        return (b * bc) + (w * conversioncost)
    }
    else if (wc + z < bc) {
        let conversioncost = wc + z;
        return (w * wc) + (b * conversioncost)
    }
    else {
        return (w * wc) + (b * bc)
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

        const b = parseInt(firstMultipleInput[0], 10);

        const w = parseInt(firstMultipleInput[1], 10);

        const secondMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

        const bc = parseInt(secondMultipleInput[0], 10);

        const wc = parseInt(secondMultipleInput[1], 10);

        const z = parseInt(secondMultipleInput[2], 10);

        const result = taumBday(b, w, bc, wc, z);

        ws.write(result + '\n');
    }

    ws.end();
}
