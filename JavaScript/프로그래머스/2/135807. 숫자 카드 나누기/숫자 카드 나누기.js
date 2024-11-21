const gcd = (a, b) => {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function solution(arrayA, arrayB) {
    const gcdA = arrayA.reduce((acc, num) => gcd(acc, num), arrayA[0]);
    
    const gcdB = arrayB.reduce((acc, num) => gcd(acc, num), arrayB[0]);
    
    let candA = gcdA;
    if (arrayB.some(num => num % candA === 0 )) {
        candA = 0;
    }
    
    let candB = gcdB;
    if (arrayA.some(num => num % candB === 0 )) {
        candB = 0;
    }
    
    return Math.max(candA, candB);
}