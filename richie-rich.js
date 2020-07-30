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

// Complete the highestValuePalindrome function below.
const isValidPalindrome = (s) => {
    let m = Math.ceil(s.length / 2);
    for (let i = 0, j = s.length - 1; i < m, j >= m; i++ , j--) {
        if (s[i] !== s[j]) { return false; }
    }
    return true;
}
function highestValuePalindrome(s, n, k) {
    let lives = k;
    let mod = new Array(n).fill(false);
    let temp = s.split('');
    for (let i = 0; i < n / 2; i++) {
        let j = n - i - 1;
        if (temp[i] != temp[j]) {
            mod[i] = true;
            lives--;
        }
        if (temp[i] < temp[j])
            temp[i] = temp[j];
        else if (temp[i] > temp[j])
            temp[j] = temp[i];
        if (lives < 0)
            return "-1";
    }
    let j = 0;
    while ((lives > 0) && (j < n / 2)) {
        if (temp[j] != '9') {
            if (mod[j])
                lives++;
            if (lives > 1) {
                temp[j] = '9';
                temp[n - j - 1] = '9';
                lives -= 2;
            }
        }
        j++;
    }
    if (n % 2 == 1) {
        if (lives > 0)
            temp[Math.floor(n / 2)] = '9';
    }
    return temp.join('');
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nk = readLine().split(' ');

    const n = parseInt(nk[0], 10);

    const k = parseInt(nk[1], 10);

    const s = readLine();

    let result = highestValuePalindrome(s, n, k);

    ws.write(result + "\n");

    ws.end();
}
