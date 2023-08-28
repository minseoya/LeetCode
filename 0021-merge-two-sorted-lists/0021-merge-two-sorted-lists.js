/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let answer = new ListNode(0)
    let current = answer
  
    while(list1 && list2){
         let list1Num = list1 ? list1.val : Infinity;
        let list2Num = list2 ? list2.val : Infinity;

        if(list1Num<list2Num){
            current.next = new ListNode(list1Num)
            current = current.next
           if(list1) list1 = list1.next

        }else if(list1Num == list2Num){

            current.next = new ListNode(list1Num)
            current = current.next
           if(list1) list1 = list1.next
           current.next = new ListNode(list2Num)
            current = current.next
           if(list2) list2 = list2.next

        }
        else{
            current.next = new ListNode(list2Num)
            current = current.next
            if(list2)  list2 = list2.next
            }
    }
     if (list1) {
        current.next = list1; // list1이 남은 경우, 나머지를 추가
    }

    if (list2) {
        current.next = list2; // list2가 남은 경우, 나머지를 추가
    }
    return answer.next
};