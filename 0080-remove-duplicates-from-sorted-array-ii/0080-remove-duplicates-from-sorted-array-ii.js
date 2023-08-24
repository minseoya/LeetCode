/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
   //의사코드
    //배열의 index로 앞뒤를 비교 이때 겹치는 수가 2개 이상인지 확인할것
    const map = new Map()
    let index = 0
    for(let i =0;i<nums.length;i++){
        if(!map.has(nums[i])){
            map.set(nums[i],1)
            nums[index]=nums[i]
            index ++
        }else{
            if(map.get(nums[i])==1){
                map.set(nums[i],2)
                nums[index]=nums[i]
                index++
            }
        }
    }
return index
};
