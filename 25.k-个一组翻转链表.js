/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    let curNode = head, result = null;
    const arr = [];
    const kLen = Math.floor(k / 2);
    while(curNode) {
        arr.push(curNode.val);
        curNode = curNode.next;
    }
    for (let i = 0; i < arr.length; i+=k) {
        if (i + k > arr.length) break;
        for (let j = 0; j < kLen; j++) {
            if (arr[i + k - 1 - j] === undefined) break;
            [arr[i + j], arr[i + k - 1 - j]] = [arr[i + k - 1 - j], arr[i + j]]
        }
    }
    for (let i = arr.length - 1; i >= 0; i--) {
        result = new ListNode(arr[i], result)
    }
    return result
};
// @lc code=end

