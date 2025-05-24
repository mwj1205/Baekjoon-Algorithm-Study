const fs = require('fs');
const input = +fs.readFileSync('/dev/stdin').toString().trim();

const queue = Array.from({ length: input }, (_, i) => i + 1);
let front = 0;

while (queue.length - front > 1) {
  front++; // 맨 위 카드 버리기
  queue.push(queue[front++]); // 다음 카드 아래로 보내기
}

console.log(queue[front]);
