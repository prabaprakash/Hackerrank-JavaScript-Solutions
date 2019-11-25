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

// Complete the quickSort function below.
function quickSort(ar) {
    let ar_size= ar.length;
   var left=[];
    var right=[];
    var pivot=ar[0];
    var j=0,k=0;
    for(var i=1;i<ar_size;i++)
    {
       if(ar[i]<pivot)
       {
           left[j]=ar[i];
           j++;
       }
       else
       {
           right[k]=ar[i];
           k++;
       }
    }
    let arr=[];
    //j=0;k=0;
    for(var i=0;i<j;i++)
    {
           arr[i]=left[i];
    }
    arr[j]=pivot;
    for(var i=0;i<k;i++)
    {
           arr[i+j+1]=right[i];
    }
     return arr;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    let result = quickSort(arr);

    ws.write(result.join(" ") + "\n");

    ws.end();
}
