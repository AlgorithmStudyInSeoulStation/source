/**
 * [E] 83. Remove Duplicates from Sorted List
 * https://leetcode.com/problems/remove-duplicates-from-sorted-list/
 */
/**
 * Definition for singly-linked list.
 */
function ListNode (val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (head) {
    let node = new ListNode(head.val)
    let distArr = [head.val]

    function deepNode (pNode, oNode) {
      let templateNode = {}

      if (pNode) {
        if (!distArr.includes(pNode.val)) {
          distArr.push(pNode.val)
          templateNode = new ListNode(pNode.val)
          oNode.next = templateNode
        }

        if (pNode.next !== null) {
          let model = oNode.next !== null ? oNode.next : oNode
          deepNode(pNode.next, model)
        }
      }
    }

    deepNode(head.next, node)

    return node
  } else {
    return head
  }
}

// const testList = [[1,1,2],[]]

// testList.forEach(example => {
//   console.log(example, '> ', findDisappearedNumbers(example))
// })
