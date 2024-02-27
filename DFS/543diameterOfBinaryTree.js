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
const diameterOfBinaryTree = (root) => {
    let maxDiameter = 0;
    const dfs = (node) => {
        if (!node) {
            return 0;
        }
        const leftLength = dfs(node.left);
        const rightLength = dfs(node.right);
        maxDiameter = Math.max(maxDiameter, leftLength + rightLength);
        return Math.max(rightLength, leftLength) + 1;
    }
    dfs(root)

    return maxDiameter;
};