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

// Complete the separateNumbers function below.
function setCharAt(str, index, chr) {
    if (index > str.length - 1) return str;
    return str.substr(0, index) + chr + str.substr(index + 1);
}
function sub(a, b) {
    if (a.length === b.length) {
        var sub = 0;
        for (var i = a.length - 1; i >= 0; i--) {
            if (parseInt(b[i]) > parseInt(a[i])) {
                a = setCharAt(a, i, (parseInt(a[i]) + 10) - parseInt(b[i]));
                let j = i - 1;
                while (j >= 0) {
                    if (parseInt(a[j]) >= 1) {
                        a = setCharAt(a, j, parseInt(a[j]) - 1);
                        break;
                    } else {
                        a = setCharAt(a, j, '9');
                    }
                    j--;
                }
            }
             else {
                a = setCharAt(a, i, parseInt(a[i]) - parseInt(b[i]));
            }
        }
        // console.log('sub ', a)
        return parseInt(a);
    }
    else
        return parseInt(a) - parseInt(b);
}
function separateNumbers(s) {
    if (s.length === 1 || s[0] === '0') {
        console.log("NO");
        return;
    }
    let digit = 1;
    let i = 0;
    let flag = 1;
    let final = 1;
    while (i < s.length - digit) {
        // console.log("a ,", s.substr(i, digit));
        // console.log("b ,", s.substr(i + digit, digit));
        // console.log("c ,", s.substr(i + digit, digit+1));
        var a = s.substr(i, digit);
        var b = s.substr(i + digit, digit);
        var c = s.substr(i + digit, digit + 1);
        if ((parseInt(a) + 1) === parseInt(c)) {
            b = c;
            digit++;
            i--;
        }
        if (sub(b,a) !== 1) {
            digit += 1;
            final = digit;
            i = 0;
            flag = 0;
        } else {
            flag = 1;
            i += digit;
        }
    }
    if (flag === 1)
        console.log("YES " + s.substr(0, final))
    else {
        console.log("NO")
    }
}
function main() {
    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        separateNumbers(s);
    }
}
