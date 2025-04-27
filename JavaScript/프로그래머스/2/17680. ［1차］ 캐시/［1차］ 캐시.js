function solution(cacheSize, cities) {
    let answer = 0;
    const cache = [];
    
    cities.forEach(city => {
        city = city.toLowerCase(); // 소문자로 통일
        const index = cache.indexOf(city);
        
        if (index !== -1) {
            // cache hit
            cache.splice(index, 1);
            cache.push(city); // 다시 최신으로
            answer += 1;
        } else {
            // cache miss
            if (cacheSize > 0) {
                if (cache.length >= cacheSize) {
                    // cache가 꽉 찬 경우
                    cache.shift(); // 제일 오래된 도시 제거
                }
                cache.push(city);
            }
            answer += 5;
        }
    });
    
    return answer;
}