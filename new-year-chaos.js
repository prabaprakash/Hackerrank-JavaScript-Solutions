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

//    if (val-1) - pos > 2:
//             return "Too chaotic"
//         for j in xrange(max(0,val-2), pos):
//             if q[j] > val:
//                 moves+=1


// Complete the minimumBribes function below.
function minimumBribes(q) {
    var count = 0;
    for (var i = 0; i < q.length; i++) {
        if ( (q[i] -1) - i > 2) {
            return "Too chaotic";
        }
        for(var j = Math.max(0, q[i] -2); j < i; j++ ){
            if(q[j] > q[i])
               count ++;
        }
    }
    return count;
}

function main() {
    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine(), 10);

        const q = readLine().split(' ').map(qTemp => parseInt(qTemp, 10));

        console.log(minimumBribes(q));
    }
}
