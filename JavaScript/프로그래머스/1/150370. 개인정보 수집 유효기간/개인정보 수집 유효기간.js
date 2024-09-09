function solution(today, terms, privacies) {
    var answer = [];
    const [nowyear, nowmonth, nowday] = today.split('.').map(Number);
    const termsobj = {};
    
    for(const term of terms) {
        const [kind, period] = term.split(' ');
        termsobj[kind] = parseInt(period);
    }
    
    for(let i = 0; i < privacies.length; i++) {
        const privacy = privacies[i];
        const [date, type] = privacy.split(' ');
        let [agreeYear, agreeMonth, agreeDay] = date.split('.').map(Number);
        --agreeDay;
        if(agreeDay <= 0) {
            agreeDay = 28;
            --agreeMonth;
        }
        console.log("Month: " + agreeMonth);
        console.log("term: " + termsobj[type])
        agreeMonth += termsobj[type];
        while(agreeMonth > 12) {
            agreeMonth -= 12;
            ++agreeYear
        }
        console.log(i);
        console.log("year: " + agreeYear);
        console.log("Month: " + agreeMonth);
        console.log("Day: " + agreeDay);
        
        if (agreeYear < nowyear) {
            answer.push(i + 1);
        } else if (agreeYear === nowyear) {
            if (agreeMonth < nowmonth) {
                 answer.push(i + 1);
            } else if (agreeMonth === nowmonth && agreeDay < nowday) {
                 answer.push(i + 1);
            }
        }
    }
    
    return answer;
}