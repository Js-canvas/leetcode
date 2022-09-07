/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const str = `${x}`;
    // if (str.length === 1) return true
    const reStr = `${x}`.split('').reverse().join('')
    return str === reStr
    // const numType = str.length % 2;
    // const mid = Math.floor(str.length / 2)
    // for(let i = 1; i <= mid; i++) {
    //     if (numType === 1 && str[mid - i] !== str[mid + i]) return false
    //     else if (numType === 0 && str[mid - i] !== str[mid + i - 1]) return false
    //     else if (i === mid) return true
    // }
};

// @lc code=end

