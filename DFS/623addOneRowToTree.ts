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

const addOneRow = (
  root: TreeNode | null,
  val: number,
  depth: number
): TreeNode | null => {
  if (depth === 1) {
    const newRoot = new TreeNode(val, root, null);

    return newRoot;
  }

  const dfs = (node: TreeNode | null, currentDepth = 1) => {
    if (!node) {
      return;
    }
    if (currentDepth === depth - 1) {
      node.left = new TreeNode(val, node.left, null);
      node.right = new TreeNode(val, null, node.right);
      return;
    }
    dfs(node.left, currentDepth + 1);
    dfs(node.right, currentDepth + 1);
  };
  dfs(root);

  return root;
};
