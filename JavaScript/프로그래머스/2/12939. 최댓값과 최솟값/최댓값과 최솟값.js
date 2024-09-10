function solution(s) {
    const numarr = s.split(' ').map(Number);
    return Math.min(...numarr) + " " + Math.max(...numarr);
}