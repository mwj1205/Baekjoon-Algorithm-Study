function solution(n)
{
    let usedBattery = 0;
    while (n > 0) {
        if (n % 2 === 1) {
            n -= 1;
            usedBattery++;
        }
        n /= 2;
    }
    return usedBattery;
}