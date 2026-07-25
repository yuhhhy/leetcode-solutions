// Problem: https://leetcode.cn/problems/merge-strings-alternately/
// Accepted at: 2025年4月18日 21:41

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let w1 = word1.split('')
    let w2 = word2.split('')
    let ans = []
    while(w1.length&&w2.length){
        ans.push(w1.shift()) 
        ans.push(w2.shift()) 
    }

    return [...ans, ...w1, ...w2].join('')
};
