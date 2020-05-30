// "abcabcbb"
// "bbbbb"
// "pwwkew"

// if(문자열의 길이가 0이면) return 0;
// dp[0] = 1; // 문자 하나는 무조건 길이 1이므로, base case

// 왼쪽포인터, 오른쪽포인터 = 0;
// 맵선언
// 맵에 0번째 인덱스 set
// for(문자열을 인덱스 1부터 순회하면서) {
//     if(문자가 맵에 없으면) {
//         1. 맵에 (문자, 인덱스) 푸쉬
//         2. dp[i] = dp[i-1] + 1;
//     }else if(문자가 맵에 있으면, 중복발생) {
//         1. dup = 중복이 발생한 인덱스
//         2. cur = 현재 인덱스
//         // dup ~ cur 사이는 중복이 없는 깨끗한 구간
//         3. dp[i] = cur - dup;
//         4. for(왼쪽포인터 ~ 중복이 발생한 인덱스(dup)) {
//             이 구간의 문자들을 맵에서 제거해줌.
//             (중복이 없는 깨끗한 구간의 문자들을 맵이 기록할 수 있게끔.)
//         }
//         // 이제 왼쪽 포인터는 중복이 발생한 문자 바로 다음 문자를 가리키고 있다.
//         5. (중복이 발생한 문자, 현재인덱스)를 맵에 새롭게 push
//     }
// }

var lengthOfLongestSubstring = function(s) {
    if(s.length === 0) return 0;

    let MAX = 1;
    const dp = [];
    dp[0] = 1;

    let left = 0, right = 0;
    const m = new Map();
    m.set(s[0], 0);
    for(let i=1; i<s.length; i++) {

        if(!m.has(s[i])) {
            m.set(s[i], i);
            dp[i] = dp[i-1] + 1;
        }else {
            const dup = m.get(s[i]);
            const cur = i;
            dp[i] = cur - dup;
            for(; left<=dup; left++) {
                m.delete(s[left]);
            }
            m.set(s[dup], i);

        }
        
        MAX = Math.max(MAX, dp[i]);
    }

    return MAX;
};
