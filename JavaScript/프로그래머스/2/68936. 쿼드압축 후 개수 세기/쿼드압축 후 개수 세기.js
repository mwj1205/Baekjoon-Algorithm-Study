function solution(arr) {
    const answer = [0, 0];
    
    function allSame(x, y, size) {
        for (let i = x; i < x + size; i++) {
            for (let j = y; j < y + size; j++) {
                if(arr[x][y] !== arr[i][j]) return false;
            }
        }
        return true;
    }
    
    function quadRecv(x, y, size) {
        if(allSame(x, y, size)) {
            answer[arr[x][y]]++;
            return;
        }
        quadRecv(x, y, size/2);
        quadRecv(x + size/2, y, size/2);
        quadRecv(x, y + size/2, size/2);
        quadRecv(x + size/2, y + size/2, size/2)
    }
    
    quadRecv(0, 0, arr.length)
    return answer;
}