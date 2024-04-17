/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

const smallestFromLeaf = (root: TreeNode | null): string => {
  let smallestString = "";
  const dfs = (node: TreeNode | null, currentString: string): void => {
    if (!node) {
      return;
    }
    const newCurrentString = String.fromCharCode(node.val + 97) + currentString;
    if (!node.left && !node.right) {
      if (!smallestString.length || smallestString > newCurrentString) {
        smallestString = newCurrentString;
      }
    }
    dfs(node.left, newCurrentString);
    dfs(node.right, newCurrentString);
  };

  dfs(root, "");

  return smallestString;
};
