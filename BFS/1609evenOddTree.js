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
 * @return {boolean}
 */
const isEvenOddTree = (root) => {
    const bfs = (root) => {
        const queue = [
            {
                node: root,
                level: 0
            }
        ];
        const result = [];
        while (queue.length) {
            const current = queue.shift();
            result.push({value: current.node.val, level: current.level});
            if (current.node.left) {
                queue.push({node: current.node.left, level: current.level + 1});
            }
            if (current.node.right) {
                queue.push({node: current.node.right, level: current.level + 1});
            }
        }

        return result;
    }
    const nodes = bfs(root);
    let level = -1;
    let levelChanged = false;
    let previousNodeValue = 0;
    for (const node of nodes) {
        if (level !== node.level) {
            levelChanged = true;
            level = node.level;
        }
        if (node.value % 2 === level % 2) {
            return false;
        }
        if (!levelChanged) {
            if (level % 2 === 0 && node.value <= previousNodeValue) {
                return false;
            }
            if (level % 2 === 1 && node.value >= previousNodeValue) {
                return false;
            }
        }
        levelChanged = false;
        previousNodeValue = node.value;
    }

    return true;
};