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

const evaluateTree = (root: TreeNode | null): boolean => {
  const dfs = (node: TreeNode) => {
    if (!node.left && !node.right) {
      return node.val === 1;
    }
    const leftNodeResult = dfs(node.left!);
    const rightNodeResult = dfs(node.right!);
    if (node.val === 2) {
      return leftNodeResult || rightNodeResult;
    }
    return leftNodeResult && rightNodeResult;
  };

  return dfs(root!);
};
