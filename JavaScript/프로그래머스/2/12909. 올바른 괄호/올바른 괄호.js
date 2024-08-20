function solution (bracket) {
    let stack = [];
    for(br of bracket) {
        if(br === "(" || br === "{" || br === "[")
            stack.push(br);
        else {
            switch(br) {
                case ')':
                    if(stack.pop() !== '(')
                        return false;
                    break;
                case '}':
                    if(stack.pop() !== '{')
                        return false;
                    break;
                case ']':
                    if(stack.pop() !== '[')
                        return false;
                    break;
            }
        }
    }

    return stack.length === 0;
}