/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const counter = new Map()
    for(let i=0;i<nums.length;i++){
        if(!counter.has(nums[i])){
            counter.set(nums[i],1)
        }else{
            counter.set(nums[i],counter.get(nums[i])+1)
        }
    }

    let maxValue = 0;
    let maxKey =0
    counter.forEach((value, key, map) => {
   if(value>=maxValue){
       maxValue=value
       maxKey=key
   }
});
    return maxKey
};