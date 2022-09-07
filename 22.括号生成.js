/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */
// 插入法 n = 2 ; a(b)c  在n = 1 的结果 ()的abc三个位置可以插入 ()，以此递归

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    if (n === 1) return ['()'];
    const arr = generateParenthesis(n - 1);
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        const str = arr[i];
        const sLen = str.length
        res.push(`()${str}`)
        res.push(`${str}()`)
        for (let j = 1; j < sLen; j++) {
            res.push(`${str.slice(0, j)}()${str.slice(j)}`)
        }
    }
    return [...new Set(res)]
};
// @lc code=end
