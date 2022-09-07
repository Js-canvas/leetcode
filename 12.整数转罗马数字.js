/*
 * @lc app=leetcode.cn id=12 lang=javascript
 *
 * [12] 整数转罗马数字
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const sLen = `${num}`.length - 1;
    let numClone = num;
    let result = ''
    const obj = {
        0: {
            1: 'I',
            4: 'IV',
            5: 'V',
            9: 'IX'
        },
        1: {
            1: 'X',
            4: 'XL',
            5: 'L',
            9: 'XC'
        },
        2: {
            1: 'C',
            4: 'CD',
            5: 'D',
            9: 'CM'
        },
        3: {
            1: 'M'
        }
    }
    for (let i = sLen; i >= 0; i--) {
        const n = Math.floor(numClone / (10 ** i));
        numClone = numClone % (10 ** i);
        if (n >= 5) {
            if (n === 9) {
                result += new Array(1).fill(obj[i][9]).join('')
                continue;
            } else {
                result += new Array(1).fill(obj[i][5]).join('') + new Array(n - 5).fill(obj[i][1]).join('')
                continue;
            }
        } else if (n === 4) {
            result += new Array(1).fill(obj[i][4]).join('')
            continue;
        } else {
            result += new Array(n).fill(obj[i][1]).join('')
            continue;
        }
    }
    return result;
};


// @lc code=end

