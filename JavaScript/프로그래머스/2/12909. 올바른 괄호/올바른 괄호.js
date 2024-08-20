function solution (bracket) {
    let stack = [];
    for(br of bracket) {
        if(br === "(") stack.push(br);
        else if(stack.pop() !== '(') return false;
    }
    return stack.length === 0;
}
