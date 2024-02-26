/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
const isSameTree = (p, q) => {
    const dfs = (node, secondTreeNode) => {
        if (!node && !secondTreeNode) {
            return true;
        }
        if (!node && secondTreeNode) {
            return false;
        }
        if (!secondTreeNode && node) {
            return false;
        }
        if (node.val !== secondTreeNode.val) {
            return false;
        }
        if (node.left && !secondTreeNode.left) {
            return false;
        }
        if (secondTreeNode.left && !node.left) {
            return false;
        }
        if (node.right && !secondTreeNode.right) {
            return false;
        }
        if (secondTreeNode.right && !node.right) {
            return false;
        }
        let leftNodeResult = true;
        if (node.left) {
            leftNodeResult =dfs(node.left, secondTreeNode.left);
        }
        let rightNodeResult = true;
        if (node.right) {
            rightNodeResult = dfs(node.right, secondTreeNode.right);
        }
        return leftNodeResult && rightNodeResult;
    }

    return dfs(p, q);
};