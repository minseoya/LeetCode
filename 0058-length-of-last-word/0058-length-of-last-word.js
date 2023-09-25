/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const arr = s.split(" ")
    
    let answer = an(arr)
    
    return answer
};

function an(arr,n=1){
    if(arr[arr.length-n].length==0){
        return an(arr,n+1)
    }

    return arr[arr.length-n].length
}