/*
 * @lc app=leetcode.cn id=30 lang=javascript
 *
 * [30] 串联所有单词的子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    let wordsObj = {};
    for (let i = 0; i < words.length; i++) {
        if (wordsObj[words[i]]) {
            wordsObj[words[i]] += 1
        } else {
            wordsObj[words[i]] = 1
        }
    }
    const wlen = words.length;
    const len = words[0].length;
    const result = [];
    for (let i = 0; i < s.length - (wlen - 1) * len; i++) {
        const list = {...wordsObj};
        let num = i;
        for (let j = 0; j < wlen; j++) {
            const word = s.substr(num, len);
            if (list[word]) {
                list[word] -= 1;
                num += len;
                if (j === wlen - 1) result.push(i)
            } else {
                break;
            }
        }
    }
    return result
};
// @lc code=end

