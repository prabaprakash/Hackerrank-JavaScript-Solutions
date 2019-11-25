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

// Complete the gridChallenge function below.
function gridChallenge(grid) {
    for (var i = 0; i < grid.length; i++) {
        grid[i] = grid[i].split('').sort().join('');
    }
    console.log(grid);
    for (var j = 0; j < grid.length; j++) {
        for (var i = 0; i < grid.length - 1; i++) {
            if (grid[i][j] > grid[i + 1][j]) {
                console.log(grid[i][j], grid[i + 1][j]);
                return "NO";
            }
        }
    }

    return "YES";
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine(), 10);

        let grid = [];

        for (let i = 0; i < n; i++) {
            const gridItem = readLine();
            grid.push(gridItem);
        }

        let result = gridChallenge(grid);

        ws.write(result + "\n");
    }

    ws.end();
}
