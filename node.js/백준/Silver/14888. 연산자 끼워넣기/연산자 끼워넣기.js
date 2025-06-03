const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = +input[0];
const nums = input[1].split(' ').map(Number);
const operators = input[2].split(' ').map(Number); // [+, -, *, /]

let max = -Infinity;
let min = Infinity;

function dfs(depth, value, plus, minus, mul, div) {
    if (depth === N) {
        if (value === -0) value = 0;
        max = Math.max(max, value);
        min = Math.min(min, value);
        return;
    }
    
    if (plus > 0) {
        dfs(depth + 1, value + nums[depth], plus - 1, minus, mul, div);
    }
    if (minus > 0) {
        dfs(depth + 1, value - nums[depth], plus, minus - 1, mul, div);
    }
    if (mul > 0) {
        dfs(depth + 1, value * nums[depth], plus, minus, mul - 1, div);
    }
    if (div > 0) {
        let result = Math.trunc(value / nums[depth]);
        dfs(depth + 1, result, plus, minus, mul, div - 1);
    }
}

dfs(1, nums[0], ...operators);

console.log(max);
console.log(min);