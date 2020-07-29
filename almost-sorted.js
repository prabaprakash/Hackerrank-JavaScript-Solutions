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

// Complete the almostSorted function below.
function almostSorted(arr) {
    const isSorted = arr => arr.every((v, i, a) => !i || a[i - 1] <= v);
    const swap = (arr, i, j) => {
        let t = arr[i];
        arr[i] = arr[j];
        arr[j] = t;
    };
    const reverse = (arr, i, j) => {
        let split = arr.slice(i, j + 1);
        split.reverse();
        arr.splice(i, j, ...split);
    }

    let peak = [], valley = [];
    for (let i = 1; i < arr.length - 1; i++) {
        let prev = arr[i - 1],
            current = arr[i],
            next = arr[i + 1];
        if (current > prev && current > next && next > prev) {
            // console.log("peak", i + 1, current)
            peak.push(i + 1)
        }
        else if (prev > current && current < next && next > prev) {
            // console.log("valley", i + 1, current)

            valley.push(i + 1)
        }
    }
    // console.log(valley, peak)
    if (arr.length === 2) {
        if (arr[0] > arr[1])
            console.log(`yes\nswap 1 2`);
    }
    // case 2
    else if (valley.length === 1 && peak.length === 1) {
        swap(arr, peak[0] - 1, valley[0] - 1);
        if (isSorted(arr)) {
            console.log(`yes\nswap ${peak[0]} ${valley[0]}`);
            return;
        }
        swap(arr, peak[0] - 1, valley[0] - 1);
        reverse(arr, peak[0] - 1, valley[0] - 1);
        // swap
        if (isSorted(arr)) {
            console.log(`yes\nreverse ${peak[0]} ${valley[0]}`);
        } else {
            console.log('no');
        }
    }
    // case 1
    else if (valley.length === 1)
        console.log("no");
    // case 4
    else if (valley.length === 0 && peak.length === 0) {
        reverse(arr, 0, arr.length - 1)
        if (isSorted(arr)) {
            console.log(`yes\nreverse 1 ${arr.length}`)
        } else { console.log('no') }
    }
    else {
        console.log("no");
    }
}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    almostSorted(arr);
}
