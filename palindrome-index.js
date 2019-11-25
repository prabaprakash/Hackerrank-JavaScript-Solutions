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

// Complete the palindromeIndex function below.
function palindrome(str) {

    var len = str.length;
    var mid = Math.floor(len/2);

    for ( var i = 0; i < mid; i++ ) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }

    return true;
}

function palindromeIndex(str) {
    let index = -1;

    if (palindrome(str)) {
        return index;
    }
    var result = -1;
        
        for (var j=0; j<str.length / 2; j++) {
            if (str[j] !== str[str.length - 1 - j]) {
                if (str[j+1] === str[str.length - 1 - j] && palindrome(str.slice(0, j) + str.slice(j+1))) {
                    // Delete j (left-side).
                    result = j;
                }
                else if (str[j] === str[str.length - 2 - j] && palindrome(str.slice(0, str.length - 1 - j) + str.slice(str.length - j))) {
                    // Delete str.length - 1 - j (right-side).
                    result = str.length - 1 - j;
                }
                else {
                    // Not a possible palindrome.
                    result = -1;
                }
                
                break;
            }
        }
        
    return result;
}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        let result = palindromeIndex(s);

        ws.write(result + "\n");
    }

    ws.end();
}
