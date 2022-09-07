/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    const arr = []
    let listNode = head
    let len = 0
    while(listNode) {
        len ++;
        arr.push(listNode.val)
        listNode = listNode.next;
    }
    arr.splice(len - n, 1)
    let curNode = null;
    for(let i = arr.length - 1; i >= 0; i--) {
        const node = new ListNode(arr[i], curNode);
        curNode = node;
    }
    return curNode;
};
// @lc code=end

