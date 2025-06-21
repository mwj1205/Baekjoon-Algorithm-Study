const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

// 회원 수
const N = parseInt(input[0]);

// 회원 정보 파싱 + 입력 순서
const members = input.slice(1).map((line, index) => {
  const [age, name] = line.split(' ');
  return { age: parseInt(age), name, index };
});

// 나이 오름차순, 나이가 같으면 가입 순서대로 정렬
members.sort((a, b) => {
  if (a.age !== b.age) return a.age - b.age;
  return a.index - b.index;
});

console.log(members.map(m => `${m.age} ${m.name}`).join('\n'));
