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

function cavityMap(g) {
    let grid = g;
    for (var i = 1; i < grid.length - 1; i++) {
        for (var j = 1; j < grid.length - 1; j++) {
            let left = parseInt(grid[i][j - 1]);
            let right = parseInt(grid[i][j + 1]);
            let up = parseInt(grid[i - 1][j]);
            let down = parseInt(grid[i + 1][j]);
            let x = parseInt(grid[i][j]);
            if (x > up &&
                x > right &&
                x > left &&
                x > down) {
                let f = grid[i].split('');
                f[j] = 'X';
                grid[i] = f.join('');
            }
        }
    }
    return grid;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    let grid = [];

    for (let i = 0; i < n; i++) {
        const gridItem = readLine();
        grid.push(gridItem);
    }

    let result = cavityMap(grid);

    ws.write(result.join("\n") + "\n");

    ws.end();
}
