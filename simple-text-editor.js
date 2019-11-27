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

// Complete the serviceLane function below.
function textEditor(n, operations) {
    let stack = [];
    let output = [];
    let str = '';
    for (var i = 0; i < n; i++) {
        switch (operations[i][0]) {
            case '1': {
                stack.push(str);
                str = str + operations[i][1];
                break;
            }
            case '2': {
                stack.push(str);
                str = str.substr(0, str.length - parseInt(operations[i][1]))
                break;
            }
            case '3': {
                output.push(str[parseInt(operations[i][1]) - 1]);
                break;
            }
            case '4': {
                str = stack.pop();
                break;
            }
        }

    }
    return output;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const nt = readLine().split(' ');
    const n = parseInt(nt[0], 10);

    let operations = Array(n);

    for (let i = 0; i < n; i++) {
        operations[i] = readLine().split(' ');
    }

    let result = textEditor(n, operations);

    ws.write(result.join("\n") + "\n");

    ws.end();
}