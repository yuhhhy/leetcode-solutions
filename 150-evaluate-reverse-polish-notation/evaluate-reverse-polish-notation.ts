// Problem: https://leetcode.cn/problems/evaluate-reverse-polish-notation/
// Accepted at: 2026年6月6日 17:19

function evalRPN(tokens: string[]): number {
    const stack: number[] = [];
    for(const token of tokens){
        if(!isNaN(Number(token))){
            stack.push(Number(token));
        }else{
            const b = stack.pop();
            const a = stack.pop();
            switch (token){
                case '+': stack.push(a + b); break;
                case '-': stack.push(a - b); break;
                case '*': stack.push(a * b); break;
                case '/': stack.push(Math.trunc(a / b)); break;
            }
        }     
    }
    return stack.pop();
};
