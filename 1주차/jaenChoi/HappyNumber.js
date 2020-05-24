/**
 * [E] 202. Happy Number
 * https://leetcode.com/problems/happy-number/
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  // 무한루프 방지
  let result = []

  // 반복함수
  let loopSum = pNum => {
    if (isNaN(pNum) || pNum < 0) return -1

    let numArr = pNum.toString().split('')
    let sum = 0

    numArr.forEach(item => {
      item = parseInt(item)
      sum += item * item
    })

    if (result.includes(sum)) {
      return sum
    } else {
      result.push(sum)
      return loopSum(sum) // 재귀호출
    }
  }

  return loopSum(n) === 1
}

// const testList = [19, 7]

// testList.forEach(example => {
//   console.log(example, '> ', isHappy(example))
// })
