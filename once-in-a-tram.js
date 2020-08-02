process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}
function onceInATram(x) {
    while(1) {
    let left = parseInt(x[0]) +parseInt(x[1])+parseInt(x[2]);
    for(let j=parseInt(x.slice(3,6))+1;j<1000;j++)
    {           
        // console.log(j)
        let str = pad(j,3);
        let right = parseInt(str[0]) +parseInt(str[1])+parseInt(str[2]);
        // console.log(right)
        if(left === right)
        {
            return x.slice(0,3)+str;
        }
    }
     let nest = parseInt(x.slice(0,3))+1
     x = nest+"000";
    }
}

function main() {
    var x = readLine();
    var result = onceInATram(x);
    process.stdout.write("" + result + "\n");
}