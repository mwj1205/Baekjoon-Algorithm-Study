function solution(numbers) {
    const answer = [];
    numbers.forEach((number) => {
        const binaryNumber = number.toString(2).split('').map(Number);
        if (binaryNumber[binaryNumber.length - 1] === 0) {
            binaryNumber[binaryNumber.length - 1] = 1;
            
        }
        else {
            let zeroIndex = binaryNumber.lastIndexOf(0);
            if (zeroIndex === -1) {
                binaryNumber.unshift(0);
                zeroIndex = 0;
            }
            binaryNumber[zeroIndex] = 1;
            binaryNumber[zeroIndex + 1] = 0;
        }
        const decNumber = parseInt(binaryNumber.join(''), 2);
        answer.push(decNumber)
    })
    return answer;
}