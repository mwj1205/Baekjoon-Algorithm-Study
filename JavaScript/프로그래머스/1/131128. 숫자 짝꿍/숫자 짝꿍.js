function solution(X, Y) {
    var answer = '';
    let temparr = [];
    const arrX = X.split("");
    const arrY = Y.split("");

    for(let i = 9; i >= 0; i--) {
        const lenX = arrX.filter((a) => Number(a) === i).length;
        const lenY = arrY.filter((a) => Number(a) === i).length;
        answer+=String(i).repeat(Math.min(lenX, lenY));
    }
    if(answer === '') return '-1';
    if(answer[0] === '0') return '0';
    return answer;
}