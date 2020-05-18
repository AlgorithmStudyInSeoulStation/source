const getLength = (str, index) => {
    if(!index) return 1;
    let length = 0;
    const MAP = new Map();
    
    for(let i=index; i>=0; i--) {
        const cur = str[i];
        
        if(MAP.has(cur)) return length;
        else {
            MAP.set(cur);
            length++;
        }
    }
    
    return length;
};

var lengthOfLongestSubstring = function(s) {
    let MAX = 0;
    for(let i=0; i<s.length; i++){
       MAX = Math.max(MAX, getLength(s, i));
    }
    return MAX;
};
