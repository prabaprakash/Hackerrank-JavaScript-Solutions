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

function getStrength(password, weight_a) {
    password =  password.toLowerCase();
    let c = 0;
    for(let i in password){
       let value = (password[i].charCodeAt() - 97) + weight_a;
       c+= (value <=25) ? value : (value - 26);
    }
    return c;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const password = readLine();

    const weight_a = parseInt(readLine().trim(), 10);

    const strength = getStrength(password, weight_a);

    ws.write(strength + '\n');

    ws.end();
}
