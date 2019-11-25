'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the countSort function below.
function countSort(arr) {
    // console.log(arr)
    let a = {};
    for (var i = 0; i < arr.length; i++) {
        a[arr[i][0]] = [];
    }
    for (var i = 0; i < arr.length / 2; i++) {
        a[arr[i][0]].push(["-"]);
    }
    for (var i = (arr.length / 2); i < arr.length; i++) {
        a[arr[i][0]].push([arr[i][1]]);
    }
    let str = '';
    for(var i in a) {
     str+=a[i].join(' ')+" ";
    }
    console.log(str);
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ');
    }

    countSort(arr);
}
