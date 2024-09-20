function solution(clothes) {
    var answer = 1;
    let clothobj = {};
    for (let i = 0; i < clothes.length; i++) {
        let type = clothes[i][1];
        
        if(!clothobj[type]) clothobj[type] = 0;
        clothobj[type]++;
    }
    
    for (let val of Object.values(clothobj)) {
        answer *= (val + 1);
    }
    
    return answer - 1;
}