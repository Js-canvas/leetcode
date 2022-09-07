/*
 * @lc app=leetcode.cn id=10 lang=javascript
 *
 * [10] 正则表达式匹配
 */
//  https://leetcode-cn.com/problems/regular-expression-matching/solution/dong-tai-gui-hua-zen-yao-cong-0kai-shi-si-kao-da-b/
//  动态规划
//  结题思路：
//  左 -> 右 需要考虑的情况太多，所以反向思考（右 -> 左）
//  将问题拆分为只考虑当前最后一位是否匹配，其余为子问题
//  s : aab p: a*b s下标i p下标j dp[i][j] 记录s前i是否匹配p前j
//  首先考虑 (s -> b).test(p -> b) 并记录在dp[i][j]中
//  满足后继续继续向前匹配，(s -> a).test(p -> *)，因为p是特殊符号，所以需要判断*前一位 是否跟 s -> a相同
//  s 的匹配就是 子串的匹配 dp[i][j] = dp[i-1][j-1] = .... = dp[0][0]
//  已知dp[0][0] 指的就是全匹配了 就是true



// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    if (s == null || p == null) return false;

    const sLen = s.length;
    const pLen = p.length;
    const dp = new Array(sLen + 1);
    for(let i = 0; i < dp.length; i++) {
        dp[i] = new Array(pLen + 1).fill(false);
    }
    dp[0][0] = true; // s = '', p = ''
    for(let j = 0; j < pLen; j++) {
        if(p[j - 1] === '*') dp[0][j] = dp[0][j - 2]
    }
    for(let i = 1; i < sLen + 1; i++) {
        for(let j = 1; j < pLen + 1; j++) {
            if (s[i - 1] === p[j - 1] || p[j - 1] === '.') {
                dp[i][j] = dp[i - 1][j - 1];
            } else if (p[j - 1] === '*') {
                if (s[i - 1] === p[j - 2] || p[j - 2] === '.') {
                    dp[i][j] = dp[i - 1][j - 2] || dp[i][j - 2] || dp[i - 1][j]
                } else {
                    dp[i][j] = dp[i][j - 2]
                }
            }
        }
    }
    return dp[sLen][pLen]
};

// @lc code=end
