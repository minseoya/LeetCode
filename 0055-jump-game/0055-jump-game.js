/**
 
 * @param {number[]} nums
 * @return {boolean}
 */

  //values은 맥심으로 점프가능하다. -> 맥스로 안뛰어도됨
// index,values을 더해서? 현재 index길이보다 짧으면 도착을 못함 false
//현재 index에서 갈수있는 거리(values+index)를 계속 업데이트
//마지막에 도착하면 true

var canJump = function(nums) {

    let num = 0
    for(let i =0;i<nums.length;i++){
       if(i>num){return false}
        num = Math.max(num,i+nums[i])
    }
    return true

};
