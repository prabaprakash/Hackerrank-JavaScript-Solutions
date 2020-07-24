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

// Complete the organizingContainers function below.
function organizingContainers(container) {
    let containerCount = new Array(container.length).fill(0);
    let typeCount = new Array(container.length).fill(0)
    container.forEach((type, i_index) => {
        type.forEach((val, j_index) => {
            containerCount[i_index] += val;
            typeCount[j_index] += val;
        });
    });
    let pts = "Possible";
    containerCount = containerCount.sort();
    typeCount = typeCount.sort();
    for (let i = 0; i < containerCount.length; i++) {
        if (containerCount[i] !== typeCount[i]) {
            pts = "Impossible";
            break;
        }
    }
    return pts;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const n = parseInt(readLine(), 10);

        let container = Array(n);

        for (let i = 0; i < n; i++) {
            container[i] = readLine().split(' ').map(containerTemp => parseInt(containerTemp, 10));
        }

        let result = organizingContainers(container);

        ws.write(result + "\n");
    }

    ws.end();
}
