function solution(want, number, discount) {
    var answer = 0;
    let map = new Map();
    
    for(let i = 0; i < want.length; i++) {
        map.set(want[i], number[i]);
    }
    
    let dismap = new Map();
    for(let i = 0; i < 10; i++) {
        let pro = discount[i];
        dismap.set(pro, (dismap.get(pro) || 0) + 1);
    }
    
    function isSame() {
        for(let [key, value] of map) {
            if(dismap.get(key) !== value) {
                return false;
            }
        }
        return true;
    }
    
    if(isSame()) answer++;
    
    for(let i = 10; i < discount.length; i++) {
        let prev = discount[i - 10];
        let next = discount[i];
        
        dismap.set(prev, dismap.get(prev) - 1);
        dismap.set(next, (dismap.get(next) || 0) + 1)
        
        if(isSame()) answer++;
    }
    return answer;
}