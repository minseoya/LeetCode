/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let unique = new Set()
    let index = 0
    
    for(let i=0;i < nums.length;i++){
        if(!unique.has(nums[i])){
            unique.add(nums[i])
            nums[index]=nums[i]
            index++
        }
    }

    return index
};