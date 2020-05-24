/**
 * [M] 3. Longest Substring Without Repeating Characters
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let maxLength = 0

  if (s && typeof s === 'string' && s.length > 0) {
    let str = s[0]
    let dicCand = {}
    maxLength = 1 // str.length

    for (let i = 1; i < s.length; i++) {
      let ch = s[i]
      let idx = str.indexOf(ch)

      if (s[i - 1] !== ch && idx === -1) {
        // dicCanc.hasOwnProperty(ch)
        str += ch
      } else {
        dicCand[str] = dicCand.hasOwnProperty(str) ? dicCand[str] + 1 : 1

        if (idx > -1) {
          str = str.substr(idx + 1) + ch
        } else {
          str = ch
        }
      }

      maxLength = maxLength < str.length ? str.length : maxLength
    }
  }

  return maxLength
}

const testList = ['abcabcbb', 'abababcdd', 'pwwkew', 'dvdf']

testList.forEach(example => {
  console.log(example, '> ', lengthOfLongestSubstring(example))
})
