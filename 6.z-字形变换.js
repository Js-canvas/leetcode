/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// https://leetcode-cn.com/problems/zigzag-conversion/solution/hua-jie-suan-fa-6-z-zi-xing-bian-huan-by-guanpengc/

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1) return s
    const m = Math.floor(s.length / numRows);
    let num = 1;
    let firstStr = '', midStr = '', lastStr = '';
    while(num <= numRows) {
        if (num === 1) {
            for(let i = 0; i <= m; i++) {
                let str = s[i*(numRows + numRows - 2) + 2 - num - 1];
                if (str) {
                    firstStr += str
                }
            }
        } else if (num === numRows) {
            for(let i = 0; i <= m; i++) {
                let str = s[i*(numRows + numRows - 2) + num - 1];
                if (str) {
                    lastStr += str
                }
            }
        } else {
            for(let i = 0; i <= m; i++) {
                let str1 = s[i*(numRows + numRows - 2) + 2 - num - 1]
                let str2 = s[i*(numRows + numRows - 2) + 2 - num + 2 * (num - 1) - 1]
                if (str1) {
                    midStr += str1
                }
                if (str2) {
                    midStr += str2
                }
            }
        }
        num ++
    }
    console.log(firstStr + midStr + lastStr)

    return firstStr + midStr + lastStr
};
convert('A', 1)
// @lc code=end

