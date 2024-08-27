function solution(babbling) {
    const cans = ['aya', 'ye', 'woo', 'ma'];
    let answer = 0;
    
    for(let bob of babbling) {
        for(let can of cans) {
            if(bob.includes(can.repeat(2))) break;
            bob = bob.split(can).join(" ");
        }
        if(bob.split(" ").join("").length === 0) answer += 1;
    }
    
    return answer;
}