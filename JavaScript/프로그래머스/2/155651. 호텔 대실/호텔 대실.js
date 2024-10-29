function solution(book_time) {
    const MAX_END_TIME = 60 * 24;
    const times = book_time.map(([start, end]) => {
        const [startH, startM] = start.split(':').map(Number);
        const [endH, endM] = end.split(':').map(Number);
        const startMin = startH * 60 + startM;
        let endMin = endH * 60 + endM + 10;
        return [startMin, endMin];
    });
    
    times.sort((a, b) => a[0] - b[0]);
    
    const rooms = []
    for (const [start, end] of times) {
        if (rooms.length > 0 && rooms[0] <= start) {
            rooms.shift();
        }
        rooms.push(end);
        rooms.sort((a, b) => a - b);
    }
    return rooms.length;
}