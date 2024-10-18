function solution(input) {
  const N = parseInt(input[0]);
  const pattern = input[1].trim();
  const files = input.slice(2).map((word) => word.trim());
  const [left, right] = pattern.split('*');

  files.forEach((file) => {
    const fileleft = file.slice(0, left.length);
    const fileright = file.slice(file.length - right.length);

    if (fileleft === left && fileright === right && file.length >= left.length + right.length) {
      console.log('DA');
    } else {
      console.log('NE');
    }
  });
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

solution(input);
