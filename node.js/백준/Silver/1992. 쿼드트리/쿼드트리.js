function solution(arr, size) {
  function allSame(x, y, size) {
    for (let i = x; i < x + size; i++) {
      for (let j = y; j < y + size; j++) {
        if (arr[x][y] !== arr[i][j]) return false;
      }
    }
    return true;
  }

  function quadRecv(x, y, size) {
    if (allSame(x, y, size)) {
      return arr[x][y].toString();
    }
    const halfSize = size / 2;
    const topLeft = quadRecv(x, y, halfSize);
    const topRight = quadRecv(x, y + halfSize, halfSize);
    const bottomLeft = quadRecv(x + halfSize, y, halfSize);
    const bottomRight = quadRecv(x + halfSize, y + halfSize, halfSize);

    return `(${topLeft}${topRight}${bottomLeft}${bottomRight})`;
  }

  return quadRecv(0, 0, size);
}
// Input reading
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0]);
const arr = input.slice(1).map((line) => line.split(''));

console.log(solution(arr, N));
