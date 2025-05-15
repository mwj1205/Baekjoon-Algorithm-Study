const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = +input[0];
const queue = input[1].split(' ').map(Number); // 첫 대기열
const stack = []; // queue에서 나왔지만 지금 간식을 받을 수 없는 학생

let current = 1;

while (queue.length > 0 || stack.length > 0) {
    if (queue.length > 0 && queue[0] === current) {
        queue.shift(); // 간식 받음
        current++;
    } else if (stack.length > 0 && stack[stack.length - 1] === current) {
        stack.pop(); // 스택에서 꺼내서 간식 받음
        current++;
    } else if (queue.length > 0) {
        stack.push(queue.shift()); // 대기열에서 스택으로 이동
    } else {
        break; // 더 이상 이동 불가
    }
}

console.log(current === N + 1 ? 'Nice' : 'Sad');