function solution(cards1, cards2, goal) {
    var answer = '';
    let i = 0, j = 0;
    for (s of goal) {
        if(s === cards1[i])
            i++;
        else if (s === cards2[j])
            j++;
        else return 'No';
    }
    return 'Yes';
}