/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    if (nums.length === 3) return nums[0] + nums[1] + nums[2];
    nums.sort((a, b) => a - b);
    let nLen = nums.length;
    let result = nums[0] + nums[1] + nums[nLen - 1];
    for (let i = 0; i < nLen; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let L = i + 1;
        let R = nLen - 1;
        while(L < R) {
            const sum = nums[i] + nums[L] + nums[R]
            if (sum === target) {
                return target
            } else if (sum > target) {
                while(L < R && nums[R] === nums[R - 1]) R--
                R--
            } else {
                while(L < R && nums[L] === nums[L + 1]) L++
                L++
            }
            if (Math.abs(sum - target) < Math.abs(result - target)) {
                result = sum;
            }
        }
    }
    return result
};
// @lc code=end

