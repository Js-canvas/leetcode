/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    let curNode = head, result = null;
    const arr = [];
    while(curNode) {
        arr.push(curNode.val);
        curNode = curNode.next;
    }
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 1) [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]]
    }
    for (let i = arr.length - 1; i >= 0; i--) {
        result = new ListNode(arr[i], result)
    }
    return result
};

// var swapPairs = function (head) {
//     if (!head || !head.next) return head
//     var one = head
//     var two = one.next
//     var three = two.next

//     two.next = one
//     one.next = swapPairs(three)

//     return two
// };
// @lc code=end

