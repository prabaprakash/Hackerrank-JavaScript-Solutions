// Didn't solve my prabaprakash
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

// Complete the climbingLeaderboard function below.
function climbingLeaderboard(scores, alice) {
    let ranks = [];
    for (var i = 0, rank = 1; i < scores.length; i++) {
        if (i > 0 && scores[i] !== scores[i - 1])
            rank++;
        ranks[i] = rank;
    }
    // console.log(ranks)
    rank++;
    let aliceRank = ranks[ranks.length - 1] + 1; //Set it to worst rank+1
    let leaderboardIndex = scores.length - 1;
    let prevScore = -1; //Last score we saw
    let o = [];
    for (let aliceScores = 0; aliceScores < alice.length; aliceScores++) {
        let levelScore = alice[aliceScores];

        //We iterate 1 past the front of the array incase we are greater than the best score
        for (let i = leaderboardIndex; i >= -1; i--) {
            if (i < 0 || scores[i] > levelScore) {
                o.push(aliceRank);
                break;
            }
            else if (scores[i] < levelScore) {
                if (scores[i] != prevScore)//We have went up a ranking
                {
                    aliceRank--;
                }
                leaderboardIndex--;
            }
            else//scores[i] == alice[level]
            {
                leaderboardIndex--;
                aliceRank = ranks[i];
            }
            prevScore = scores[i];
        }
    }
    return o;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const scoresCount = parseInt(readLine(), 10);

    const scores = readLine().split(' ').map(scoresTemp => parseInt(scoresTemp, 10));

    const aliceCount = parseInt(readLine(), 10);

    const alice = readLine().split(' ').map(aliceTemp => parseInt(aliceTemp, 10));

    let result = climbingLeaderboard(scores, alice);

    ws.write(result.join("\n") + "\n");

    ws.end();
}
