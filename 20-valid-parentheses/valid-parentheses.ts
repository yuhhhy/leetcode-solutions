// Problem: https://leetcode.cn/problems/valid-parentheses/
// Accepted at: 2026年6月17日 16:03

function isValid(s: string): boolean {
    if (s.length % 2 !== 0) return false;
    
    const map: Record<string, string> = {
        '(': ')',
        '[': ']',
        '{': '}'
    };
    const stack: string[] = [];
    
    for(const char of s){
        if(char in map){
            stack.push(char);
        }else{
            if(stack.length <= 0 || map[stack.pop()] !== char){
                return false;
            }
        }
    }

    return stack.length === 0; 
};
