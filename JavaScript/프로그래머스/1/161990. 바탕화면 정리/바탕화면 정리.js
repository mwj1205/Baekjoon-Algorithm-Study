function solution(wallpaper) {
    var answer = [];
    let lux = 50, luy = 50;
    let rdx = 0, rdy = 0;
    for(let i = 0; i < wallpaper.length; i++) {
        for (let j = 0; j < wallpaper[0].length; j++) {
            if(wallpaper[i][j] === '#'){
                if(j < luy) luy = j;
                if(j + 1 > rdy) rdy = j + 1;
                if(i < lux) lux = i;
                if(i + 1 > rdx) rdx = i + 1;
            }
                
        }
    }
    answer.push(lux);
    answer.push(luy);
    answer.push(rdx);
    answer.push(rdy);
    return answer;
}