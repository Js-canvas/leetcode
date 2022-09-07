/*
 * @lc app=leetcode.cn id=29 lang=javascript
 *
 * [29] 两数相除
 */

// @lc code=start
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    const dividendSymbol = dividend >= 0;
    const divisorSymbol = divisor >= 0;
    let symbols = false;
    if (dividendSymbol === divisorSymbol) symbols = true;
    let result = 0, num = 1;
    dividend = Math.abs(dividend)
    divisor = Math.abs(divisor)
    while (dividend >= divisor) {
        result ++;
        dividend -= divisor
    }
    // if (divisor !== 1) {
    //     while (dividend >= Math.pow(divisor, num)) {
    //         num ++
    //     }
    //     dividend = num - 1;
    // } else {
    //     result = dividend;
    // }
    if (result >= Math.pow(2, 31)) {
        result = symbols ? Math.pow(2, 31) - 1 : Math.pow(2, 31)
    }
    return Number(`${symbols?'':'-'}${result}`)
};
// @lc code=end

