var isValid = function(s) {
    const stack = [];

    const isPair = (stackTop, char) => {
        if(stackTop === '(' && char === ')') return true;
        else if(stackTop === '[' && char === ']') return true;
        else if(stackTop === '{' && char === '}') return true;
        else return false;
    }
    
    for(let i=0; i<s.length; i++) {
        if(!s.length) return true;
        
        const char = s[i];
        const stackTop = stack.length > 0 && stack[stack.length - 1];
        
        if(!stack.length) {
            stack.push(char);    
        }else if(isPair(stackTop, char)) {
            stack.pop();
        }else {
            stack.push(char);
        }
    }
    
    
    return stack.length === 0;
};
