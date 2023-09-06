/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let counter = 0
    let result = null

    function check(node){
        if(!node || counter >=k) return 

        check(node.left)

        counter ++
        if(counter ==k){
            result =node.val
            return
        }
        check(node.right)
    }
    check(root)
    return result
};