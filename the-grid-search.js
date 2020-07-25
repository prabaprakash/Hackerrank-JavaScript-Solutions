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

const getIndices = (word, pattern) => {
    let indices = [];
    let i = 0;
    let index = word.indexOf(pattern, i);
    while (index >= 0) {
        indices.push(index);
        i++;
        index = word.indexOf(pattern, i);
    }
    return Array.from(new Set(indices));
}
function gridSearch(G, P) {
    let gridLength = G.length;
    let patternLength = P.length;
    for (let gridIndex = 0; gridIndex < gridLength; gridIndex++) {
        let patternIndex = 0;
        let gridRow = G[gridIndex + patternIndex];
        let patternRow = P[patternIndex];
        let indices = getIndices(gridRow, patternRow);
        for (let index in indices) {
            let pos = indices[index];
            for (patternIndex = 1; patternIndex < patternLength; patternIndex++) {
                gridRow = G[gridIndex + patternIndex];
                patternRow = P[patternIndex];
                let patternRowIndices = getIndices(gridRow, patternRow);
                if (patternRowIndices.indexOf(pos) === -1) {
                    break;
                }
            }
            if (patternIndex === patternLength)
                return "YES";
        }
    }
    return "NO";
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const RC = readLine().split(' ');

        const R = parseInt(RC[0], 10);

        const C = parseInt(RC[1], 10);

        let G = [];

        for (let i = 0; i < R; i++) {
            const GItem = readLine();
            G.push(GItem);
        }

        const rc = readLine().split(' ');

        const r = parseInt(rc[0], 10);

        const c = parseInt(rc[1], 10);

        let P = [];

        for (let i = 0; i < r; i++) {
            const PItem = readLine();
            P.push(PItem);
        }

        let result = gridSearch(G, P);

        ws.write(result + "\n");
    }

    ws.end();
}
