function solution(id_list, report, k) {
    const answer = [];
    const id_mail = {};
    const reportedId = {};
    for (const id of id_list) {
        id_mail[id] = 0;
        reportedId[id] = [];
    }
    
    const uniquereport = new Set(report);
    for (const report of uniquereport) {
        const [reporter, reported] = report.split(' ');
        reportedId[reported].push(reporter);
    }
    
    for(const reporters of Object.values(reportedId)) {
        if(reporters.length >= k) {
            for (const reporter of reporters)
                id_mail[reporter] += 1;
        }
    }
    
    for(const num of Object.values(id_mail)) {
        answer.push(num);
    }
    return answer;
}