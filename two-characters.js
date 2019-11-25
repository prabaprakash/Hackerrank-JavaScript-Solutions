'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the alternate function below.
function alternate(s) {
    var arr = {};
    for (var i = 0; i < s.length; i++) {
        arr[s[i]] = 0;
    }
    var min = 0;
    for (var i in arr) {
        for (var j in arr) {
            if (i !== j) {
                let check1 = replaceString(arr, s, i, j);
                if (validateAlternatives(check1, i, j)) {
                    console.log(check1);
                    if (check1.length > min)
                        min = check1.length;
                }
            }
        }
    }
    return min;
}
function replaceString(arr, s, a, b) {
    let str = s;
    var pattern = "/{1}/g";
    var re = new RegExp(pattern);
    for (var i in arr) {
        if (i !== a && i !== b) {
            str = str.replace(new RegExp(i, "g"), "")
        }
    }
    return str;
}

function validateAlternatives(str, a, b) {
    let check = true;
    for (var i = 0; i < str.length; i++) {
        if (i % 2 === 0 && str[i] !== a) {
            return false;
        }
        if (i % 2 === 1 && str[i] !== b) {
            return false;
        }
    }
    return check;
}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const l = parseInt(readLine().trim(), 10);

    const s = readLine();

    const result = alternate(s);

    ws.write(result + '\n');

    ws.end();
}
