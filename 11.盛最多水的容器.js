/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// var maxArea = function(height) {
//     let result = 0;
//     for(let i = 0; i < height.length - 1; i++) {
//         for(let j = i + 1; j < height.length; j++) {
//             if (height[j] > height[i]) {
//                 result = height[i] * (j - i) > result ? height[i] * (j - i) : result
//             } else {
//                 result = height[j] * (j - i) > result ? height[j] * (j - i) : result
//             }
//         }
//     }
//     return result
// };

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */

var maxArea = function(height) {
    let result = 0;
    let i = 0, j = height.length - 1;
    while(i !== j) {
        let s = Math.min(height[i], height[j]) * (j - i)
        if (height[i] > height[j]) {
            j--
        } else {
            i++
        }
        result = Math.max(s, result)
    }
    return result
};

// @lc code=end
