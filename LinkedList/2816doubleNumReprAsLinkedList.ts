class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
/** UNOPTIMISED FOR BIG NUMBERS */
const unomptimisedDoubleIt = (head: ListNode | null): ListNode | null => {
  if (!head) {
    return null;
  }
  if (head.val === 0) {
    return head;
  }
  let composedNumber = 0,
    node: ListNode | null = head;
  while (node) {
    composedNumber = composedNumber * 10 + node.val;
    node = node.next;
  }

  const doubleComposedNumberComponents: string[] = String(
    composedNumber * 2
  ).split("");

  let doubleNumberListNodes: ListNode[] = [];
  for (let i = 0; i < doubleComposedNumberComponents.length; i++) {
    doubleNumberListNodes.push(
      new ListNode(Number(doubleComposedNumberComponents[i]))
    );
    if (i === 0) {
      continue;
    }
    doubleNumberListNodes[i - 1].next = doubleNumberListNodes[i];
  }

  return doubleNumberListNodes[0];
};

const doubleIt = (head: ListNode | null): ListNode | null => {
  if (!head) {
    return null;
  }
  if (head.val === 0) {
    return head;
  }
  let node: ListNode | null = head,
    nodesArray: ListNode[] = [];

  while (node) {
    nodesArray.push(node);
    node = node.next;
  }
  let doubleComposedNumberComponents: number[] = [],
    carry = 0;
  for (let i = nodesArray.length - 1; i >= 0; i--) {
    const currentNumber = nodesArray[i].val * 2 + carry;
    doubleComposedNumberComponents.push(currentNumber % 10);
    if (currentNumber > 9) {
      carry = 1;
      continue;
    }
    carry = 0;
  }
  if (carry) {
    doubleComposedNumberComponents.push(carry);
  }
  doubleComposedNumberComponents.reverse();

  let doubleNumberListNodes: ListNode[] = [];
  for (let i = 0; i < doubleComposedNumberComponents.length; i++) {
    doubleNumberListNodes.push(new ListNode(doubleComposedNumberComponents[i]));
    if (i === 0) {
      continue;
    }
    doubleNumberListNodes[i - 1].next = doubleNumberListNodes[i];
  }

  return doubleNumberListNodes[0];
};
