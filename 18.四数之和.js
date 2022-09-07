/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    if (nums.length < 4) return [];
    nums.sort((a, b) => a - b);
    let nLen = nums.length;
    const result = [];
    for (let i = 0; i < nLen - 3; i++) {
        for (let j = i + 1; j < nLen - 2; j++) {
            let L = j + 1;
            let R = nLen - 1;
            if (i > 0 && nums[i] === nums[i - 1]) continue;
            if (j !== i + 1 && nums[j] === nums[j - 1]) continue;
            if (nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > target) break;
            if (nums[i] + nums[j] + nums[nLen - 2] + nums[nLen - 1] < target) continue;

            while(L < R) {
                const sum = nums[i] + nums[j] + nums[L] + nums[R];
                if (sum == target) {
                    result.push([nums[i], nums[j], nums[L], nums[R]])
                    while(L < R && nums[R] === nums[R - 1]) R--
                    while(L < R && nums[L] === nums[L + 1]) L++
                    R--
                    L++
                } else if (sum > target) {
                    while(L < R && nums[R] === nums[R - 1]) R--
                    R--
                } else {
                    while(L < R && nums[L] === nums[L + 1]) L++
                    L++
                }
            }
        }
    }
    return result
};
// @lc code=end
