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

// Complete the makingAnagrams function below.
function makingAnagrams(s1, s2) {
    var obj = {};
    for (var i = 0; i < s1.length; i++) {
        if (typeof obj[s1[i]] === 'undefined') {
            obj[s1[i]] = 1;
        } else {
            obj[s1[i]] = obj[s1[i]] + 1;
        }
    }
    var obj2 = {};
    for (var i = 0; i < s2.length; i++) {
        if (typeof obj2[s2[i]] === 'undefined') {
            obj2[s2[i]] = 1;
        } else {
            obj2[s2[i]] = obj2[s2[i]] + 1;
        }
    }
    for (var i in obj) {
        if (typeof obj2[i] !== 'undefined') {
            console.log(i);
            const a = Math.min(obj[i], obj2[i]);
            obj[i] = obj[i] - a;
            obj2[i] = obj2[i] - a;
        }
    }
    var count = 0;
    for (var i in obj2) {
        count += obj2[i];
    }
    for (var i in obj) {
        count += obj[i];
    }
    return count;
    // console.log(obj, obj2, count);
}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s1 = readLine();

    const s2 = readLine();

    let result = makingAnagrams(s1, s2);

    ws.write(result + "\n");

    ws.end();
}
