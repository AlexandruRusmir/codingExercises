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

const sumOfLeftLeaves = (root: TreeNode | null): number => {
  if (!root) {
    return 0;
  }
  const getValueForLeftNodeIfLeftLeaf = (node: TreeNode): number => {
    if (!node.left) {
      return 0;
    }
    if (node.left.left || node.left.right) {
      return 0;
    }

    return node.left.val;
  };

  const dfs = (node: TreeNode | null): number => {
    if (!node) {
      return 0;
    }

    return (
      getValueForLeftNodeIfLeftLeaf(node) + dfs(node.left) + dfs(node.right)
    );
  };

  return dfs(root);
};
