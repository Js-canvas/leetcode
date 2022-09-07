/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length === 1) return false;
    const arr = [];
    let n = 0
    const obj = {
        '{': '}',
        '(': ')',
        '[': ']'
    }
    while(n < s.length) {
        if (['(', '{','['].includes(s[n]))  arr.push(s[n]);
        else if ([')', '}',']'].includes(s[n]) && obj[arr.pop()] !== s[n]) return false
        if (n === s.length - 1 && arr.length === 0) return true
        if (n === s.length - 1) return false
        n++;
    }
};
// @lc code=end
