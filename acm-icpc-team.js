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

// Complete the acmTeam function below.
function acmTeam(topic) {

    var obj = {};
    for (var i = 0; i < topic.length; i++) {
        obj[i] = {};
        for (var j = 0; j < topic[i].length; j++) {
            obj[i][j] = topic[i][j];
        }
    }
    var ans = {};
    for (var i = 0; i < topic.length; i++) {
        for (var j = i + 1; j < topic.length; j++) {
            var count = 0;
            for (var k = 0; k < topic[0].length; k++) {
                //console.log(obj[i])
                //console.log(obj[j])
                if (obj[i][k] === '1' || obj[j][k] === '1') {
                    count++;
                }
            }
            if (typeof ans[count] === 'undefined') {
                ans[count] = 1;
            } else {
                ans[count] = ans[count] + 1;
            }
            // console.log(i + 1, j + 1, count)
            //break
        }
        //break;
    }
    let l = Object.keys(ans)[Object.keys(ans).length - 1]

    return [l, ans[l]]
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nm = readLine().split(' ');

    const n = parseInt(nm[0], 10);

    const m = parseInt(nm[1], 10);

    let topic = [];

    for (let i = 0; i < n; i++) {
        const topicItem = readLine();
        topic.push(topicItem);
    }

    let result = acmTeam(topic);

    ws.write(result.join("\n") + "\n");

    ws.end();
}
