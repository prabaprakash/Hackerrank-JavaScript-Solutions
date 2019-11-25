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

// Complete the isValid function below.
function isValid(s) {
    if (s.length === 1)
        return "YES";
    var obj = {};
    for (var i = 0; i < s.length; i++) {
        if (typeof obj[s[i]] === 'undefined') {
            obj[s[i]] = 1;
        } else {
            obj[s[i]] = obj[s[i]] + 1;
        }
    }
    var obj1 = {};
    for (var o in obj) {
        let x = obj[o];
        if (typeof obj1[x] === 'undefined') {
            obj1[x] = 1;
        } else {
            obj1[x] = obj1[x] + 1;
        }
    }
    var flag = 0;
    let keys = Object.keys(obj1).map(x => parseInt(x));
    console.log(keys);
    if (keys.length === 1)
        return "YES";
    if (keys.length != 2)
        return "NO";
    for (var o in obj1) {
        if (obj1[o] === 1 && parseInt(o) - 1 === 0) {
            flag = 1;
            break;
        }
        if (obj1[o] === 1 && keys.indexOf(parseInt(o) - 1) != -1)
            flag = 1;
    }
    // console.log(obj1.sort((x, y) => obj1[x] - obj1[y]));
    return flag == 0 ? "NO" : "YES";
    //aaaabbcc          { '2': 2, '4': 1 } NO 
    //aabbccddeefghi     { '1': 4, '2': 5 } NO
    //abcdefghhgfedecba  { '2': 7, '3': 1 } YES
    //aabbcd             { '1': 2, '2': 2 } NO
    //aabbc              { '1': 1, '2': 2 } YES
    //aaaaabc           { '1': 2, '5': 1 } NO
    //xxxaabbccrry      { '1': 1, '2': 4, '3': 1 } NO
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = isValid(s);

    ws.write(result + "\n");

    ws.end();
}
