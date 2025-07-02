const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n").map(Number);

function cantor(start, len, arr) {
    if (len === 1) return;

    const third = len / 3;
    for (let i = start + third; i < start + 2 * third; i++) {
        arr[i] = ' ';
    }

    cantor(start, third, arr);
    cantor(start + 2 * third, third, arr);
}

for (const N of input) {
    const size = 3 ** N;
    const result = Array(size).fill('-');
    cantor(0, size, result);
    console.log(result.join(""));
}
