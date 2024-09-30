function solution(fees, records) {
    const answer = [];
    const [ basicTime, basicCharge, unitTime, unitCharge ] = fees;
    const inTime = {};
    const totalTime = {};
    
    function diffTime(time, carNumber) {
        const [outHour, outMinute] = time.split(":").map(Number);
        const diffHour = outHour - inTime[carNumber][0];
        const diffMin = outMinute - inTime[carNumber][1];
        return diffHour * 60 + diffMin;
    }
    
    records.forEach(record => {
        const [time, carNumber, inout] = record.split(" ");
        if (inout === 'IN') {
            inTime[carNumber] = time.split(":").map(Number);
        } 
        else {
            const parkTime = diffTime(time, carNumber);
            totalTime[carNumber] = (totalTime[carNumber] || 0) + parkTime;
            delete inTime[carNumber];
        }
    });
    
    for (const carNumber in inTime) {
        const parkTime = diffTime("23:59", carNumber);
        totalTime[carNumber] = (totalTime[carNumber] || 0) + parkTime;
    }
    
    const carNumbers = Object.keys(totalTime).sort((a, b) => a - b);
    
    for(const carNumber of carNumbers) {
        const time = totalTime[carNumber];
        let charge;
        if (time <= basicTime) {
            charge = basicCharge;
        } 
        else {
            charge = basicCharge + Math.ceil((time - basicTime) / unitTime) * unitCharge;
        }
        answer.push(charge);
    }
    return answer;
}