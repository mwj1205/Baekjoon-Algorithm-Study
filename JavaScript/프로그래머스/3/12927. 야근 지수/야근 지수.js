function solution(n, works) {
    works.sort((a, b) => b - a); // 내림차순 정렬
    
    while (n > 0) {
        if (works[0] === 0) break;
        works[0]--; // 제일 큰 요소에서 -1
        
        // 첫 번째 요소를 크기에 맞는 곳으로 재정렬
        let i = 0;
        while (i + 1 < works.length && works[i] < works[i + 1]) {
            [works[i], works[i + 1]] = [works[i + 1], works[i]];
            i++;
        }
        
        n--;
    }
    
    return works.reduce((sum, w) => sum + w * w, 0);
}