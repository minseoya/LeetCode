/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    if (!node) return null;
  const visited = new Map();

    function dfs(originalNode) {

        if (visited.has(originalNode)) {
            return visited.get(originalNode);
        }

        const clonedNode = new Node(originalNode.val);
        visited.set(originalNode, clonedNode);

        for (const neighbor of originalNode.neighbors) {
            clonedNode.neighbors.push(dfs(neighbor));
        }

        return clonedNode;
    }


    return dfs(node);
};






