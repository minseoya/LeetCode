/**
 * @param {string} s
 * @return {number}
 */
/**
처음에 작성한 코드 하지만 "dvdf"일 때 df만 걸러진다는 문제점을 발견
그럼 해당 문제에는 silde window알고리즘이 필요하다는 것을 느낌
var lengthOfLongestSubstring = function(s) {
    let word = s.split("");
    const check = new Map();
    let maxWord = "";

    for (let i = 0; i < word.length; i++) {
        if (!check.has(word[i])) {
            check.set(word[i], 1);
        } else {
            if (maxWord.length < check.size) {
                maxWord = Array.from(check.keys()).join("");
            }
            check.clear();
            check.set(word[i], 1);
        }
    }

    if (maxWord.length < check.size) {
        maxWord = Array.from(check.keys()).join("");
    }

    return maxWord.length;
};

 */

var lengthOfLongestSubstring = function(s) {
    let left = 0;
    let right = 0;
    let maxLength = 0;
    const charSet = new Set();

    while (right < s.length) {
        if (!charSet.has(s[right])) {
            charSet.add(s[right]);
            maxLength = Math.max(maxLength, right - left + 1);
            right++;
        } else {
            charSet.delete(s[left]);
            left++;
        }
    }

    return maxLength;
};
