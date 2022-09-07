/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    const arr = [];
    let curNode1 = list1, curNode2 = list2;
    while(curNode1) {
        arr.push(curNode1.val);
        curNode1 = curNode1.next;
    }
    while(curNode2) {
        arr.push(curNode2.val);
        curNode2 = curNode2.next;
    }
    arr.sort((a, b) => a - b);
    let curNode = null;
    for(let i = arr.length - 1; i >= 0; i--) {
        const listNode = new ListNode(arr[i], curNode);
        curNode = listNode;
    }
    return curNode

};

// var mergeTwoLists = function(list1, list2) {
//     if (list1 === null) return list2;
//     if (list2 === null) return list1;
//     if (list1.val < list2.val) {
//         list1.next = mergeTwoLists(list1.next, list2) ;
//         return list1;
//     } else {
//         list2.next = mergeTwoLists(list1, list2.next) ;
//         return list2;
//     }
// };
// @lc code=end

