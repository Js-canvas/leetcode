/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    const trimStr = s.trim();
    const symbol = ['-', '+'].includes(trimStr.substr(0,1)) ? trimStr.substr(0,1) : ''
    const curStr = symbol === '' ? trimStr : trimStr.substr(1);
    if (/^[0-9]/.test(curStr)) {
        const numStr = curStr.match(/^[0-9]{1,}/)[0] * `${symbol}1`;
        if (numStr > 2147483647) {
            return 2147483647
        } else if (numStr < -2147483648) {
            return -2147483648
        } else {
            return numStr
        }
    } else {
        return 0
    }

};
// @lc code=end

