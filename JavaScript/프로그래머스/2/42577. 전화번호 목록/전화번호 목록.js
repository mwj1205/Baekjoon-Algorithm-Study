function solution(phone_book) {
    const phone_set = new Set();
    phone_book.sort((a, b) => a - b);
    for (const number of phone_book) {
        for (let i = 1; i < number.length; i++) {
            const prefix = number.slice(0, i);
            if(phone_set.has(prefix)) {
                return false;
            }
        }
        phone_set.add(number);
    }
    return true;
}