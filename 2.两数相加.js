/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */


// [{id:id-1, val:2, next:id-2}, {id:id-2, val:4, next:id-3}, {id:id-3, val:3, next:null}]

// 递归创建以上结构，next => 指向下一个指针对应的对象

function addTwoNumbers (l1, l2) {
    let result = new ListNode(0);
    let isAdd = 0;
    const res = result;
    while(l1 || l2 || isAdd) {
        let val = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + isAdd;
        isAdd = val >= 10 ? 1 : 0 ;
        result.next = new ListNode(val % 10)
        result = result.next
        l1 = l1 && l1.next;
        l2 = l2 && l2.next;
    }

    return res.next
}
// @lc code=end

