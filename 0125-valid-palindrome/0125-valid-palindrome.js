/**
 * @param {string} s
 * @return {boolean}
 */
// s에 숫자와 영어가 아닌 특수기호를 빼는건! 정규표현식이용
// let reg = /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/ ]/gim;
// let resultData = s.replace(reg, "");
//  s.length
//  if(s.length%2 == 1){
//      splice(s.length/2+1,1)
//     for()
//     양 끝에서 하나씩 같은지 비교해서 다같으면 true
//     아니면 false
//  }

var isPalindrome = function(s) {
    let reg = /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/ ]/gim;
    let resultData = s.replace(reg, "");

    resultData=resultData.toLowerCase();

    let arr = [...resultData]

    if(arr.length % 2 ==1){arr.splice(arr.length/2,1)}

    for(let i =0;i<arr.length;i++){
        if(arr[i]!=arr[arr.length-1-i]){

            return false
        }
    }
    return true
};