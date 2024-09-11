function solution(s) {
    var answer = '';
    answer = s.split(" ").map(word => {
        if(word === "") return "";
        else return word[0].toUpperCase() + word.slice(1).toLowerCase()
    }).join(" ");
    return answer;
}