/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let max = null
    let counter
    for(let i=0;i<nums.length;i++){
        if(max==null) {
            max = nums[i]
            counter = i
        }
        if(max<nums[i]){
            max=nums[i]
            counter = i
        }
    }
    return counter
};