/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    // const role1 = {
    //     IV: 4,
    //     IX: 9,
    //     XL: 40,
    //     XC: 90,
    //     CD: 400,
    //     CM: 900,
    // }
    // const role2 = {
    //     I: 1,
    //     V: 5,
    //     X: 10,
    //     L: 50,
    //     C: 100,
    //     D: 500,
    //     M: 1000,
    // }
    // let result = s;
    // for(const key in role1) {
    //     result = result.replace(new RegExp(key, 'g'), `${role1[key]}+`)
    // }
    // for(const key in role2) {
    //     result = result.replace(new RegExp(key, 'g'), `${role2[key]}+`)
    // }
    // return eval(result.substr(0, result.length - 1))

    const role = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    }
    const sLen = s.length;
    let sum = 0;
    for(let i = 0; i < sLen; i++) {
        if (i < sLen - 1 && role[s[i]] < role[s[i + 1]]) {
            sum -= role[s[i]]
        } else {
            sum += role[s[i]]
        }
    }
    return sum
};

// @lc code=end
// console.log(romanToInt('MCMXCIV'))

