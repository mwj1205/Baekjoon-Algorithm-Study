const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const board = input.slice(1).map(line => line.split(""));

// 두 가지 정답 패턴
const patternW = (i, j) => ((i + j) % 2 === 0 ? 'W' : 'B');
const patternB = (i, j) => ((i + j) % 2 === 0 ? 'B' : 'W');

let minCount = Infinity;

for (let i = 0; i <= N - 8; i++) {
    for (let j = 0; j <= M - 8; j++) {
        let countW = 0; // 시작이 'W'
        let countB = 0; // 시작이 'B'

        for (let x = 0; x < 8; x++) {
            for (let y = 0; y < 8; y++) {
                if (board[i + x][j + y] !== patternW(x, y)) countW++;
                if (board[i + x][j + y] !== patternB(x, y)) countB++;
            }
        }

        minCount = Math.min(minCount, countW, countB);
    }
}

console.log(minCount);
