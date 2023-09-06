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
 * @return {number}
 */
var getMinimumDifference = function(root) {
    let prev = null
    let min = Infinity

    function fn(node){
        
        if(node ==null) return 
        
        fn(node.left);

        if(prev !== null){
            min = Math.min(min,Math.abs(node.val-prev.val))
        }
        prev = node

        fn(node.right)
    }
    fn(root)

    return min
};