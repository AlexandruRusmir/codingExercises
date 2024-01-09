/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
const leafSimilar = (root1, root2) => {
    const dfs = (node) => {
        if (!node) {
            return [];
        }
        if (!node.left && !node.right) {
            return [node];
        }
        return [...dfs(node.left), ...dfs(node.right)]
    }
    const leafSequence1 = dfs(root1);
    const leafSequence2 = dfs(root2);

    return JSON.stringify(leafSequence1) === JSON.stringify(leafSequence2);
};