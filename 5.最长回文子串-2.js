/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */

var longestPalindrome = function(s) {
    const sLen = s.length;
    let result = s[0];
    if (sLen === 1 || (sLen === 2 && s[0] === s[1])) {
        return s
    }
    let evenMidNum = sLen % 2 ? (sLen - 1) / 2 : sLen / 2;
    let evenAddNum = sLen % 2 ? (sLen - 1) / 2 : sLen / 2;
    let evenSubNum = sLen % 2 ? (sLen - 1) / 2 : sLen / 2;
    let evenNum = 0, evenFlag = true;
    while(evenSubNum >= 0) {
        if (evenFlag) {
            evenAddNum = evenMidNum + evenNum;
            evenFlag = false
            for(let i = 1 ; i < sLen - evenAddNum; i++ ) {
                if (s[evenAddNum - 1] !== s[evenAddNum + 1]) break;
                if (s[evenAddNum - i] !== s[evenAddNum + i] && i > 1) {
                    let str = s.substr(evenAddNum - i + 1, (i - 1) * 2 + 1)
                    if (str.length > result.length) {
                        result = str
                    }
                    break;
                }
                if (s[evenAddNum - i] === s[evenAddNum + i] && i === sLen - 1 - evenAddNum) {
                    let str = s.substr(evenAddNum - i, i * 2 + 1)
                    if (str.length > result.length) {
                        result = str
                    }
                    break;
                }
            }
        } else {
            evenNum += 1
            evenSubNum = evenMidNum - evenNum;
            evenFlag = true
            for(let i = 1 ; i <= evenSubNum; i++ ) {
                if (s[evenSubNum - 1] !== s[evenSubNum + 1]) break;
                if (s[evenSubNum - i] !== s[evenSubNum + i] && i > 1) {
                    let str = s.substr(evenSubNum - i + 1, (i - 1) * 2 + 1)
                    if (str.length > result.length) {
                        result = str
                    }
                    break;
                }
                if (s[evenSubNum - i] === s[evenSubNum + i] && i === evenSubNum) {
                    let str = s.substr(evenSubNum - i, i * 2 + 1)
                    if (str.length > result.length) {
                        result = str
                    }
                    break;
                }
            }
        }
    }
    let oddMidNum = sLen % 2 ? (sLen - 1) / 2 :sLen / 2;
    let oddAddNum = sLen % 2 ? (sLen - 1) / 2 :sLen / 2;
    let oddSubNum = sLen % 2 ? (sLen - 1) / 2 :sLen / 2;
    let oddNum = 0, oddFlag = true;
    while(oddSubNum >= 0) {
        if (oddFlag) {
            oddAddNum = oddMidNum + oddNum
            oddFlag = false
            for(let i = 0 ; i < sLen - oddAddNum; i++ ) {
                if (s[oddAddNum] !== s[oddAddNum - 1]) break;
                if (s[oddAddNum - 1 - i] !== s[oddAddNum + i] && i > 0) {
                    let str = s.substr(oddAddNum - i, i * 2)
                    if (str.length > result.length) {
                        result = str
                    }
                    break;
                }
                if (s[oddAddNum - 1 - i] === s[oddAddNum + i] && i === sLen - 1 - oddAddNum) {
                    let str = s.substr(oddAddNum - 1 - i, (i + 1) * 2)
                    if (str.length > result.length) {
                        result = str
                    }
                    break;
                }
            }
        } else {
            oddNum += 1
            oddSubNum = oddMidNum - oddNum
            oddFlag = true
            for(let i = 0 ; i < oddSubNum; i++ ) {
                if (s[oddSubNum] !== s[oddSubNum - 1]) break;
                if (s[oddSubNum - 1 - i] !== s[oddSubNum + i] && i > 0) {
                    let str = s.substr(oddSubNum - i, i * 2)
                    if (str.length > result.length) {
                        result = str
                    }
                    break;
                }
                if (s[oddSubNum - 1 - i] === s[oddSubNum + i] && i === oddSubNum - 1) {
                    let str = s.substr(oddSubNum - 1 - i, (i + 1) * 2)
                    if (str.length > result.length) {
                        result = str
                    }
                    break;
                }
            }
        }
    }

    return result
};

// longestPalindrome('fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffgggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg')

// @lc code=end

