function solution(msg) {
    const dictionary = {};
    for (let i = 0; i < 26; i++) {
        dictionary[String.fromCharCode(65 + i)] = i + 1;
    }
    
    let nextIndex = 27;
    let match = '';
    const result = [];
    
    for (let i = 0; i < msg.length; ) {
        match = msg[i];
        let j = i + 1;
        
        // dictionary에 들어있는 가장 긴 문자열 찾기
        while (j <= msg.length && dictionary[msg.slice(i, j)]) {
            match = msg.slice(i, j);
            j++;
        }
        
        result.push(dictionary[match]);
        
        // 새로운 문자열 등록
        if (j <= msg.length) {
            const newChar = msg.slice(i, j);
            dictionary[newChar] = nextIndex++;
        }
        
        i += match.length;
    }
    console.log(dictionary);
    return result;
}