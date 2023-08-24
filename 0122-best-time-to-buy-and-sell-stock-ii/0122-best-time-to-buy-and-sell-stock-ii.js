/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
     let profit = 0
     let reduce = 0
    let min = prices[0]
    for(let i=0;i<prices.length;i++){
        min = Math.min(min,prices[i])
        if(profit <prices[i]-min){
            profit =  prices[i] - min
            reduce += profit
            profit =0
            min = prices[i]
        }
    }
    
    return reduce
};