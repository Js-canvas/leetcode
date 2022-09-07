/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// ... 运算符效率低于 concat

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const num = nums1.concat(nums2).sort((a,b) => a-b);
    const length = num.length;
    if (length % 2) {
        return num[(length - 1) / 2];
    } else {
        return (num[length / 2 - 1] + num[length / 2]) / 2
    }
};
// @lc code=end

