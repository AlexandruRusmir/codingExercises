class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

/**
 * @param {TreeNode} root
 * @return {string}
 */
const tree2str = (root) => {
    /**
     * @param {TreeNode} root
     * @param {(string|number)[]} res
     * @returns void
     */
    const preorder = (node, res) => {
        if (!node) {
            return;
        }
        res.push(node.val);
        if (!node.left && !node.right) {
            return;
        }
        res.push('(');
        preorder(node.left, res);
        res.push(')');

        if (!node.right) {
            return;
        }
        res.push('(');
        preorder(node.right, res);
        res.push(')');
    }

    let res = [];
    preorder(root, res);

    return res.join('');
};