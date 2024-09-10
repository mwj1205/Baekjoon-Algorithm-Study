function solution(park, routes) {
    var answer = [];
    let x = 0, y = 0;
    for(let i = 0; i < park.length; i++) {
        const row = park[i];
        const idx = row.indexOf("S");
        if (idx !== -1) {
            x = i;
            y = idx;
            break;
        }
    }
    
    const dirObj = {E: [0, 1], W: [0, -1], S: [1, 0], N: [-1, 0]};
    for(const route of routes) {
        const direction = route.split(' ')[0];
        const distance = parseInt(route.split(' ')[1]);
        const [dirX, dirY] = dirObj[direction];
        
        let nowX = x;
        let nowY = y;
        let isValid = true;
        
        for(let i = 1; i <= distance; i++) {
            nowX = x + dirX * i;
            nowY = y + dirY * i;
            
            if (nowX < 0 || nowX >= park.length || nowY < 0 || nowY >= park[0].length) {
                isValid = false;
                break;
            }
            
            if (park[nowX][nowY]  === 'X') {
                isValid = false;
                break;
            }
            

        }
        if(isValid) {
            x = nowX;
            y = nowY;
        }
    }
    return [x, y];
}