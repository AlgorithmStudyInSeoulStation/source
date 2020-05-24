/**
 * [E] 20. Valid Parentheses
 * https://leetcode.com/problems/valid-parentheses/
 **/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let format = ['(', '{', '[', ')', '}', ']']
  let bool = false
  let box = []

  if (s === '') return true
  else if (s.length % 2 !== 0) return false

  for (let i = 0; i < s.length; i++) {
    let idx = format.indexOf(s[i])

    if (idx >= 0 && idx < 3) {
      box.push(s[i])
    } else if (idx > 2 && idx < 6) {
      if (box.length === 0) {
        bool = false
        break
      } else {
        let before_idx = format.indexOf(box[box.length - 1])
        bool = idx === before_idx + 3
        if (!bool) break
        else box.pop()
      }
    }
  }

  if (box.length > 0) return false

  return bool
}

// const testList = ['{[]}', '(()(']

// testList.forEach(example => {
//   console.log(example, '> ', isValid(example))
// })
