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

// Complete the bigSorting function below.
function bigSorting(unsorted) {
  return unsorted.sort((x,y)=>{
     if (x.length != y.length) return x.length - y.length;

        // Now the length is the same.
        // Compare the number from the first digit.
        for (var i = 0; i < x.length; i++)
        {
            var left = x[i];
            var right = y[i];
            if (left != right)
                return left - right;
        }

        // Default: "0" means both numbers are the same.
        return 0;
  });
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    let unsorted = [];

    for (let i = 0; i < n; i++) {
        const unsortedItem = readLine();
        unsorted.push(unsortedItem);
    }

    let result = bigSorting(unsorted);

    ws.write(result.join("\n") + "\n");

    ws.end();
}
