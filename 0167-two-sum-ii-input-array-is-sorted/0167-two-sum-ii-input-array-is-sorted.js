/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
/**
for문안에서 index =0부터 value를 가지고 계산후 indexOf로 나머지 값을 찾는다 만약 -1이라면 다음 있다면 return으로 결과값 도출
예외상황발생 ex[0,0,3,4] target = 0 일때 index=1다음부터 찾아야하는데 1로 찾음 그래서 해결했지만 
O(n^2)라 또 안받아줌....
var twoSum = function(numbers, target) {
    numbers.sort((a,b)=>{a-b})

    for(let i=0;i<numbers.length;i++){
        if(numbers.indexOf(target - numbers[i],i+1)>0){
            return [i+1,numbers.indexOf(target - numbers[i],i+1)+1]
        }
    }
};
 */
/*
two pointer알고리즘이 생각났다 한 배열에서 두개의 값을 가지고 더하는 문제이기때문에
**/
var twoSum = function(numbers, target) {
    numbers.sort((a,b)=>{a-b})
    let left =0
    let right = numbers.length-1

    while(left<right){
        let result = numbers[left] + numbers[right]

        if(result ==target){
            return [left+1,right+1]
        }else if(result>target){
            right --
        }else{
            left ++
        }
    }

};