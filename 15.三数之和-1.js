/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var threeSum = function(nums) {
//     if (nums.length < 3) return []
//     const result = []
//     for (let i = 0; i < nums.length - 1; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             let cloneNum = [...nums]
//             let a = cloneNum[i], b = cloneNum[j]
//             cloneNum.splice(j, 1)
//             cloneNum.splice(i, 1)
//             if (cloneNum.includes(-(a + b))) result.push([a, b, -(a + b)].sort())
//         }
//     }

//     for (let i = 0; i < result.length - 1; i++) {
//         for (let j = i + 1; j < result.length; j++) {
//             if (result[j][0] === result[i][0] && result[j][1] === result[i][1]) {
//                 result.splice(j, 1);
//                 j--
//             }
//         }
//     }
//     console.log(result)
//     return result
// };

var threeSum = function(nums) {
    if (nums.length < 3) return []
    const result = [];
    const arr = []
    let leftArr = [], rightArr = [];
    let obj = {}
    nums.sort((a, b) => a - b);
    if (`${nums}`.indexOf('0,0,0') !== -1) arr.push('0,0,0')
    for (let i = 0; i < nums.length; i++) {
        if (!obj[nums[i]]) {
            obj[nums[i]] = 1
        } else if (obj[nums[i]] < 2) {
            obj[nums[i]] += 1
        } else {
            nums.splice(i, 1)
            i--
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= 0) {
            leftArr = i > 0 ? nums.slice(0, i) : [];
            rightArr = nums.slice(i, nums.length)
            break;
        }
    }

    for (let i = 0; i < leftArr.length; i++) {
        for (let j = 0; j < rightArr.length; j++) {
            let a = leftArr[i], b = rightArr[j]
            let c = -(a + b);
            if (c >= 0) {
                let cloneRightArr = [...rightArr]
                cloneRightArr.splice(j, 1);
                if (cloneRightArr.includes(c)) arr.push(c > b ? `${a},${b},${c}` : `${a},${c},${b}`)
            } else {
                let cloneLeftArr = [...leftArr]
                cloneLeftArr.splice(i, 1);
                if (cloneLeftArr.includes(c)) arr.push(c > a ? `${a},${c},${b}` : `${c},${a},${b}`)
            }
        }
    }

    const strArr = [...new Set(arr)];
    for (let i = 0; i < strArr.length; i++) {
        result.push(strArr[i].split(','))
    }
    return result
};
// @lc code=end
