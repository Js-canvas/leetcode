/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const str = x >= 0 ? `${x}` : `${x}`.substr(1);
    let reStr = ''
    for(const a of str) reStr = a + reStr
    const num = reStr * (x > 0 ? 1 : -1);
    if (num >= 2147483648 || num <= -2147483648) return 0
    return num
};
// @lc code=end

