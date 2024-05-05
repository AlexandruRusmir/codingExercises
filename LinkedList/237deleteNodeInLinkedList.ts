class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const deleteNode = (node: ListNode | null): void => {
  if (!node) {
    return;
  }
  const nextNode = node.next;
  const nextNextNode = nextNode?.next ?? null;
  node.val = nextNode!.val;
  node.next = nextNextNode;

  nextNode!.next = null;
};
