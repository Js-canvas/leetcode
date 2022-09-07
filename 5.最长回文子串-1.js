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
    let result = undefined;
    const len = s.length;
    let sLen = len;
    while(!result) {
        for(let i = 0; i < len; i++) {
            if (i + sLen > len) break;
            const str = sLen % 2 === 0 ? s.substr(i, sLen / 2) : s.substr(i, (sLen - 1) / 2);
            const strRe = sLen % 2 === 0 ? s.substr(i + sLen / 2, sLen / 2) : s.substr(i + (sLen + 1) / 2, sLen / 2);
            const strReverse = strRe.split("").reverse().join("");
            if (str === strReverse) {
                result = s.substr(i, sLen)
                break
            }
            continue
        }
        if (sLen > 0) {
            sLen -= 1
        } else {
            result = s[0]
        }
    }
    // console.log(result)
    return result
};

// longestPalindrome('klvxwqyzugrdoaccdafdfrvxiowkcuedfhoixzipxrkzbvpusslsgfjocvidnpsnkqdfnnzzawzsslwnvvjyoignsfbxkgrokzyusxikxumrxlzzrnbtrixxfioormoyyejashrowjqqzifacecvoruwkuessttlexvdptuvodoavsjaepvrfvbdhumtuvxufzzyowiswokioyjtzzmevttheeyjqcldllxvjraeyflthntsmipaoyjixygbtbvbnnrmlwwkeikhnnmlfspjgmcxwbjyhomfjdcnogqjviggklplpznfwjydkxzjkoskvqvnxfzdrsmooyciwulvtlmvnjbbmffureoilszlonibbcwfsjzguxqrjwypwrskhrttvnqoqisdfuifqnabzbvyzgbxfvmcomneykfmycevnrcsyqclamfxskmsxreptpxqxqidvjbuduktnwwoztvkuebfdigmjqfuolqzvjincchlmbrxpqgguwuyhrdtwqkdlqidlxzqktgzktihvlwsbysjeykiwokyqaskjjngovbagspyspeghutyoeahhgynzsyaszlirmlekpboywqdliumihwnsnwjc')

// @lc code=end

