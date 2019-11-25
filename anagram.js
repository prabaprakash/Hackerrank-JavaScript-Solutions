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

// Complete the anagram function below.
// Complete the anagram function below.
function anagram(s) {
    if (s.length % 2 !== 0)
        return -1;
    var obj = {};
    for (var i = 0; i < s.length / 2; i++) {
        if (typeof obj[s[i]] === 'undefined') {
            obj[s[i]] = 1;
        } else {
            obj[s[i]] = obj[s[i]] + 1;
        }
    }
    var obj2 = {};
    for (var i = (s.length / 2); i < s.length; i++) {
        if (typeof obj2[s[i]] === 'undefined') {
            obj2[s[i]] = 1;
        } else {
            obj2[s[i]] = obj2[s[i]] + 1;
        }
    }
    // console.log(obj, obj2, count);
    for (var i in obj) {
        if (typeof obj2[i] !== 'undefined') {
            if (obj[i] > obj2[i])
                obj2[i] = 0;
            else
                obj2[i] = obj2[i] - obj[i];

        }
    }
    var count = 0;
    for (var i in obj2) {
        count += obj2[i];
    }
    return count;
    // console.log(obj, obj2, count);
}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        let result = anagram(s);

        ws.write(result + "\n");
    }

    ws.end();
}
