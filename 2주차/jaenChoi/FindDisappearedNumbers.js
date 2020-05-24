/**
 * [E] 448. Find All Numbers Disappeared in an Array
 * https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
 **/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDisappearedNumbers = nums => {
  let result = [] // new Array(nums.length)

  if (nums && nums.length > 0) {
    for (let i = 0; i < nums.length; i++) {
      if (result[nums[i]] === undefined) result[nums[i]] = nums[i]
    }

    result.push('/')

    for (let j = 1; j <= nums.length; j++) {
      if ([undefined, '/'].includes(result[j]) || result[j] !== j) {
        result.push(j)
      }
    }

    return result.slice(result.indexOf('/') + 1)
  }

  return result
}

// const testList = [[4, 3, 2, 7, 8, 2, 3, 1], [1, 1]]

// testList.forEach(example => {
//   console.log(example, '> ', findDisappearedNumbers(example))
// })
