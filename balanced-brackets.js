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

// Complete the isBalanced function below.
function isBalanced(s) {
    if (Math.floor(s.length % 2) !== 0)
        return "NO";
    var obj = {
        "}": "{",
        "]": "[",
        ")": "(",
    }
    var stack = [];
    for (var i = 0; i < s.length; i++) {
        if (typeof obj[s[i]] === 'undefined') {
            stack.push(s[i]);
        }
        else {
            let c = stack.pop();
            if (c !== obj[s[i]])
                return "NO";
        }
    }
    if(stack.length !==0)
      return "NO";
    return "YES";

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const s = readLine();

        let result = isBalanced(s);

        ws.write(result + "\n");
    }

    ws.end();
}
