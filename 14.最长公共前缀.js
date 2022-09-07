/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
// var longestCommonPrefix = function(strs) {
//     if (strs.length === 1) return strs[0]
//     if (strs[0].length === 0) return ''
//     let str = ''
//     const sLen = strs[0].length;
//     for(let i = 1; i <= sLen; i++) {
//         str = strs[0].substr(0, i)
//         for(let j = 1; j < strs.length; j++) {
//             if (str.length > strs[j].length || !strs[j].startsWith(str)) return str.substr(0, str.length - 1)
//         }
//         if (i === sLen) return str
//     }
// };
var longestCommonPrefix = function(strs) {
    if (strs.length === 1) return strs[0]
    if (strs[0].length === 0) return ''
    let str = strs[0]
    const sLen = strs[0].length;
    for(let i = 0; i < sLen; i++) {
        for(let j = 1; j < strs.length; j++) {
            if (str[i] !== strs[j][i]) return str.substr(0, i)
        }
        if (i === sLen - 1) return str
    }
};
// @lc code=end
