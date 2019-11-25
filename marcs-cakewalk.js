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

// Complete the marcsCakewalk function below.
function marcsCakewalk(calorie) {
    calorie = calorie.sort((x, y) => y -x);
    console.log(calorie);
    var count = 0;
    for (var i = 0; i < calorie.length; i++) {
        count += (Math.pow(2, i) * calorie[i]);
    }
    return count;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const calorie = readLine().split(' ').map(calorieTemp => parseInt(calorieTemp, 10));

    let result = marcsCakewalk(calorie);

    ws.write(result + "\n");

    ws.end();
}
