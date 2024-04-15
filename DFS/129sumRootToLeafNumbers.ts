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

const sumNumbers = (root: TreeNode | null): number => {
  const dfs = (node: TreeNode | null, currentString: string = ""): number => {
    if (!node) {
      return 0;
    }
    if (!node.left && !node.right) {
      return Number(currentString + node.val);
    }
    const leftSum = dfs(node.left, currentString + String(node.val));
    const rightSum = dfs(node.right, currentString + String(node.val));

    return leftSum + rightSum;
  };

  return dfs(root);
};
