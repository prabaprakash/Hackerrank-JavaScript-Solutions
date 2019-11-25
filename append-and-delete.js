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

// Complete the appendAndDelete function below.
function appendAndDelete(s, t, k) {
    if (t === s)
        return "Yes"
    var n = 0;
    for (var i = 0; i < Math.min(s.length, t.length); i++) {
        if (s[i] === t[i]) {
            n++;
        }
        else {
            break;
        }
    }

    if ((k - s.length - t.length +
        2 * n) < 0)
        return "No";
    if ((k - s.length - t.length +
        2 * n) % 2 == 0)
        return "Yes";
    if ((k - s.length - t.length +
        2 * n) % 3 == 0)
        return "Yes";
    // Case B- 
    return "No";
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const t = readLine();

    const k = parseInt(readLine(), 10);

    let result = appendAndDelete(s, t, k);

    ws.write(result + "\n");

    ws.end();
}
