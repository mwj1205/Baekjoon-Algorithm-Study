function solution(n) {
    const countOnes = (num) => num.toString(2).split('1').length - 1;
    
    const nOnes = countOnes(n);
    let num = n + 1;
    while (nOnes !== countOnes(num)) num++;
    return num;
}