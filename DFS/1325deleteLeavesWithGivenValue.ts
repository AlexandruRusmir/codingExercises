class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const removeLeafNodes = (
  root: TreeNode | null,
  target: number
): TreeNode | null => {
  const dfs = (node: TreeNode | null, target: number): TreeNode | null => {
    if (!node) {
      return null;
    }
    node.left = dfs(node.left, target);
    node.right = dfs(node.right, target);
    if (!node.left && !node.right && node.val === target) {
      return null;
    }
    return node;
  };

  return dfs(root, target);
};
