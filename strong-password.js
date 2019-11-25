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

// Complete the minimumNumber function below.
function minimumNumber(n, password) {
    let numbers = "0123456789";
    let lower_case = "abcdefghijklmnopqrstuvwxyz";
    let upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let special_characters = "!@#$%^&*()-+";
    let nn = 0, l = 0, u = 0, s = 0;
    password.split('').forEach(x => {
        if (numbers.indexOf(x) !== -1)
            nn = 1;
        if (lower_case.indexOf(x) !== -1)
            l = 1;
        if (upper_case.indexOf(x) !== -1)
            u = 1;
        if (special_characters.indexOf(x) !== -1)
            s = 1;
    });
    if(password.length > 6) {
        return 4 - nn -l -u-s;
    }else{
        if( (password.length +  (4 - nn -l -u-s)) > 6)
          return (4 - nn -l -u-s)  ;
        else
        return 6 - password.length; 
    }

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const password = readLine();

    let answer = minimumNumber(n, password);

    ws.write(answer + "\n");

    ws.end();
}
