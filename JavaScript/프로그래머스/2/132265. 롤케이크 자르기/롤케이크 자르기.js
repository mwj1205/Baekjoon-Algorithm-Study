function solution(topping) {
    let answer = 0;
    const rightToppings = {};
    const leftToppings = new Set();
    let rightToppingCount = 0;
    for(const top of topping) {
        if (rightToppings[top]) {
            rightToppings[top]++;
        }
        else {
            rightToppings[top] = 1;
            rightToppingCount++;
        }
    }
    
    for(const top of topping) {
        leftToppings.add(top);
        rightToppings[top]--;
        if(rightToppings[top] === 0) {
            rightToppingCount--;
        }
        if (leftToppings.size === rightToppingCount){
            answer++;
        }
    }
    
    return answer;
}