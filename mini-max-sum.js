'use strict';

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

// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
    let minimum = Infinity;
    let max = 0;
    let i =0 , j = 0;
    let length = arr.length;
    for (i = 0; i < length; i++) {
        // console.log("+++++++++++++++++++++++++++++++++++");
        let c = 0;
        let sum = 0;
        for (j = 0; j < length; j++) {
            if (c < 5 && j !== i) {
                // console.log(arr[j]);
                sum = sum + arr[j];
            }
            if (c == 5)
                break;
            c++;
        }
        if (sum > max)
            max = sum;
        if (minimum > sum)
            minimum = sum
        // console.log("+++++++++++++++++++++++++++++++++++");
    }
    console.log(minimum, max);
}

function main() {
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
