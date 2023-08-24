/**
 * @param {number[]} prices
 * @return {number}
 */

//그리고 for문안에서 돌면서 max값찾기 ->2번돌면 시간이 안됨
// var maxProfit = function(prices) {

//     let maxProfit = 0
    
//     for(let i=0;i<prices.length;i++){
//         for(let j=i;j<prices.length;j++){
//             if(maxProfit < prices[j]-prices[i]){
//                 maxProfit = prices[j]-prices[i]
//             }
//         }
//     }
    
//     return maxProfit
// };

//작은수를 저장하고 손익 계산을 했을때 크면 저장
var maxProfit = function(prices) {

    let profit = 0
    let min = prices[0]
    for(let i=0;i<prices.length;i++){
        min = Math.min(min,prices[i])
        if(profit <prices[i]-min){
            profit =  prices[i] - min
        }
    }
    
    return profit
};