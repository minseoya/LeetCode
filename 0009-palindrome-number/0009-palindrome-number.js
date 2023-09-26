/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let arr = x.toString().split("")
    let nums = arr.join()
    let arrR = arr.reverse().join()


    return arrR === nums ? true:false
};