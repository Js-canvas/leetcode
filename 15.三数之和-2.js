/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */
// https://leetcode-cn.com/problems/3sum/solution/hua-jie-suan-fa-15-san-shu-zhi-he-by-guanpengchn/

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = function(nums) {
    if(nums.length < 3) return [];
    let result = [];
    let nLen = nums.length;
    nums.sort((a, b) => a - b)
    for (let i = 0; i < nLen; i++) {
        if (nums[i] > 0) break;
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let L = i + 1;
        let R = nLen - 1;
        while(L < R) {
            const sum = nums[i] + nums[L] + nums[R]
            if (sum === 0) {
                result.push([nums[i], nums[L], nums[R]])
                while(L < R && nums[L] === nums[L + 1]) L++
                while(L < R && nums[R] === nums[R - 1]) R--
                L++;
                R--;
            }
            else if (sum > 0) R--
            else L++
        }
    }
    return result
};

// @lc code=end
