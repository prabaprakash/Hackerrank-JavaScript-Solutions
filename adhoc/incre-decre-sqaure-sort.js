const fun = (n, val) => {
    if (val >= 10 && parseInt((val + "").split("").sort((x, y) => x < y).join("")) === n)
        return 1;
    if ((val - 1) === n) {
        return 1;
    }
    if (val > n) {
        return 9999;
    }
    if (val === n) {
        return 0;
    }
    let a = 1 + fun(n, val + 1);
    let b = 1 + fun(n, Math.pow(val, 2));
    return Math.min(a, b);
}

console.log(fun(3, 2) + 2);
console.log(fun(5, 2) + 2);
console.log(fun(15, 2) + 2);
console.log(fun(61, 2) + 2);
console.log(fun(18, 2) + 2);