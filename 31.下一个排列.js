/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    const len = nums.length
    if (len === 1) return nums;
    let left = 1, right = 1;
    let flag = false;
    while(right < len) {
        if (nums[right] === nums[0] && left !== right) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
            flag = true;
            left ++;
            right ++;
        } else {
            right ++;
        }
    }
    console.log('nums:', nums, left, right)
    if (flag) {
        const arr = nums.slice(left, len).sort((a, b) => a - b);
        console.log(nums)
        nums.splice(left, len - left, ...arr);
        console.log('1:', nums)
        return nums
    }
    right = 1, minNum = null;
    while(right < nums.length) {
        if (nums[right] > nums[0]) {
            if (minNum === null || nums[right] < minNum) {
                minNum = nums[right]
            }
            [nums[0], nums[right]] = [nums[right], nums[0]];
        }
        right ++;
    }
    const list = nums.slice(1, len - 1).sort((a, b) => a - b);
    nums.splice(1, len - 1, ...list);
    console.log('result:',nums)
    return nums
};
// @lc code=end

nextPermutation([1,2,3])

