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

const getIndexes = (pattern, match) =>{
    let indexes = [];
    let i=0;
    let index = pattern.indexOf(match, i);
    while(index >= 0){
        indexes.push(index);
        i++;
        index = pattern.indexOf(match, i);
    }
    return Array.from(new Set(indexes));
}
function gridSearch(G, P) {
    let G_length = G.length;
    let P_length = P.length;
    // console.log('G_length :', G_length, ' P_length:', P_length);
    for (let i = 0; i < G.length; i++) {
        let j = i, p = 0;;
        let currentGrid = G[i + p];
        let currentPattern = P[p];
        let indexes = getIndexes(currentGrid, currentPattern);
        // console.log(indexes);
        for (let k = 0; k < indexes.length; k++) {
            let pos = indexes[k];
            if (pos !== -1) {
                for (p = 1; p < P.length; p++) {
                    currentGrid = G[i + p];
                    currentPattern = P[p];
                    if (getIndexes(currentGrid, currentPattern).indexOf(pos) === -1) {
                        break;
                    }
                }
            }
            if (p === P_length)
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
