function solution(players, callings) {
    const playeridx = {};
    for(let i = 0; i < players.length; i++) {
        playeridx[players[i]] = i;
    }
    
    for (const calling of callings) {
        const idx = playeridx[calling];

        const prevPlayer = players[idx - 1];
        const upPlayer = players[idx];
        players[idx] = prevPlayer;
        players[idx - 1] = upPlayer;
        
        playeridx[upPlayer] = idx - 1;
        playeridx[prevPlayer] = idx;
    }
    return players;
}