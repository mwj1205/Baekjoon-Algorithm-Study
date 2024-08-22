// 31 29 31 30 31 30 31 31 30 31 30 31
function solution(a, b) {
    const week = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
    const days = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    const janfirst = 5;
    let mon = 0;
    let day = 0;
    
    for(let i = 0; i < a-1; i++) {
        mon += days[i];
    }
    day = mon + b + janfirst - 1;
    return week[day%7];
}