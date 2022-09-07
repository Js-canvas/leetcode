/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (digits === '') return []
    const arr = [];
    const str = 'abcdefghijklmnopqrstuvwxyz'
    for (let i = 0; i < digits.length; i++) {
        let num = digits[i]
        if (num < 7) {
            arr.push(str.substr((num - 2) * 3, 3))
        } else if (num == 7) {
            arr.push('pqrs')
        } else if (num == 8) {
            arr.push('tuv')
        } else if (num == 9) {
            arr.push('wxyz')
        }
    }
    if (arr.length === 1) return arr[0].split('')
    let len = 1;
    for (let i = 0; i < arr.length; i++) {
        len *= arr[i].length
    }
    const result = []
    for (let i = 0; i < len; i++) {
        let num = len;
        let str = '';
        for (let j = 0; j < arr.length; j++) {
            const curLen = arr[j].length
            num = num / curLen;
            str += arr[j][Math.floor(i / num) % curLen];
        }
        result.push(str)
    }
    return result
};
// @lc code=end
// letterCombinations('7')
