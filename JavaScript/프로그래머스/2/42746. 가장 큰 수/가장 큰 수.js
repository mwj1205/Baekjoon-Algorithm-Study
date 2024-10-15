function solution(numbers) {
    const toStrArr = numbers.map(String).sort((a, b) => (b + a) - (a + b));
    const result = toStrArr.join('');
    return result[0] === '0' ? '0' : result;
}