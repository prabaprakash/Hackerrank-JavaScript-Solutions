
// let permutation = [];
// const permutate = (arr) => {
//     for (let i = 0; i < arr.length - 1; i++) {
//         let current = arr[i];

//         let next = arr[i + 1]
//         arr[i] = next;
//         arr[i + 1] = current;
//         permutation.push(arr.map(x=>x));
//         arr[i + 1] = next;
//         arr[i] = current;

//     }
// }

// let arr = [1, 2, 3]
// permutate(arr)
// console.log(permutation);


let permArr = [],
    usedChars = [];
function permute(input, diff) {
    var i, ch;
    for (i = 0; i < input.length; i++) {
        // fixed 1, then process [2,3]
        ch = input.splice(i, 1)[0];
        // usedchars [1]
        usedChars.push(ch);
        if (input.length == 0) {
            let bool = true;
            for (let k = 0; k < usedChars.length; k++) {
                if (Math.abs((usedChars[k] - (k + 1))) !== diff) {
                    bool = false;
                    break;
                }
            }
            // console.log(usedChars);
            if (bool) {
                return usedChars;
            }
        }
        // processing [2,3]
        let res = permute(input, diff)
        if (res.length > 0) {
            return res;
        }

        input.splice(i, 0, ch);
        usedChars.pop();
    }
    return [];
};

function validate(arr, diff) {
    for (let k = 0; k < arr.length; k++) {
        let index = k + 1;
        let ithElement = arr[k];
        if (Math.abs(index - ithElement) !== diff) {
            return [];
        }
    }
    return arr;
}

function permute2(permutation, diff) {
    let length = permutation.length,
        c = new Array(length).fill(0),
        i = 1, k, p;
    let arr = permutation.slice();
    if (validate(arr, diff).length > 0)
        return arr;

    while (i < length) {
        if (c[i] < i) {
            k = i % 2 && c[i];
            p = permutation[i];
            permutation[i] = permutation[k];
            permutation[k] = p;
            ++c[i];
            i = 1;
            arr = permutation.slice();
            if (validate(arr, diff).length > 0)
                return arr;

        } else {
            c[i] = 0;
            ++i;
        }
    }
    return [];
}
n = 10;
k = 5;

let numbers = Array.from(Array(n), (_, i) => i + 1);

console.log((permute2(numbers, k)));