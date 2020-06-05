var longestPalindrome = function(s) {
    const dp = Array(s.length).fill(true).map(() => Array(s.length).fill(true));
    let resultLeft=0, resultRight=0;
    let MAX = 1;

    for(let len=2; len<=s.length; len++) {
        for(let left=0; left<=s.length - len; left++) {
            const right = left + len - 1;
            if(s[left] === s[right] && dp[left+1][right-1]){
                dp[left][right] = true;

                if(MAX < right - left + 1) {
                    MAX = right - left + 1;
                    resultLeft = left;
                    resultRight = right;
                }
            } 
            else {
              dp[left][right] = false;  
            } 
        }
    }

    return s.slice(resultLeft, resultRight+1);
};
