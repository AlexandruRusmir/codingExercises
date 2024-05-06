class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/** UNOPTMISED */
const unoptimisedRemoveNodes = (head: ListNode | null): ListNode | null => {
  if (!head) {
    return null;
  }
  const nodes: Array<ListNode> = [];
  let node: ListNode | null = head;

  while (node) {
    nodes.push(node);
    let i = 0;
    while (i < nodes.length - 1) {
      if (nodes[i].val < node.val) {
        nodes.splice(i, 1);
        i--;
      }
      i++;
    }
    node = node.next;
  }

  for (let i = 0; i < nodes.length - 1; i++) {
    nodes[i].next = nodes[i + 1];
  }

  return nodes[0];
};

const removeNodes = (head: ListNode | null): ListNode | null => {
  if (!head) {
    return null;
  }
  const nodesStack: Array<ListNode> = [];
  let node: ListNode | null = head;

  while (node) {
    while (
      nodesStack.length &&
      nodesStack[nodesStack.length - 1].val < node.val
    ) {
      nodesStack.pop();
    }
    nodesStack.push(node);
    node = node.next;
  }

  for (let i = 0; i < nodesStack.length - 1; i++) {
    nodesStack[i].next = nodesStack[i + 1];
  }

  return nodesStack[0];
};
