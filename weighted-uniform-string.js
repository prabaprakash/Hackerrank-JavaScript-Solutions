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

function createWeight() {
    let o = {};
    let str = "abcdefghijklmnopqrstuvwxyz";
    for (var j = 0; j < str.length; j++) {
        o[str[j]] = j + 1;
    }
    // console.log(o);
    return o;
}
function weightedUniformStrings(s, queries) {
    let weight = createWeight();
    let weights = [];
    let prev = -1, length = 0;
    for (var i = 0; i < s.length; i++) {
        // console.log(s[i]);
        weights.push(weight[s[i]])
        let j = i;
        while (s[i] === s[j + 1]) {
            // console.log(j, j + 1, s.substring(i, j + 2), "--->");
            // console.log(weight[s[i]], (j + 2 - i))
            weights.push(weight[s[i]] * (j + 2 - i))
            j++;
        }
        i = j;
    }
    let rval = [];
 for (var q in queries) {
        if (weights.indexOf(queries[q]) !== -1)
            rval.push("Yes")
        else
            rval.push("No")
    }
    return rval;
}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const queriesCount = parseInt(readLine(), 10);

    let queries = [];

    for (let i = 0; i < queriesCount; i++) {
        const queriesItem = parseInt(readLine(), 10);
        queries.push(queriesItem);
    }

    let result = weightedUniformStrings(s, queries);

    ws.write(result.join("\n") + "\n");

    ws.end();
}
