/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    const arr = []
    for (let i = 0; i < lists.length; i++) {
        let node = lists[i]
        while(node) {
            arr.push(node.val)
            node = node.next
        }
    }
    arr.sort((a, b) => a - b)
    let curNode = null
    for (let j = arr.length - 1; j >=0 ; j--) {
        curNode = new ListNode(arr[j], curNode)
    }
    return curNode
};
// @lc code=end

