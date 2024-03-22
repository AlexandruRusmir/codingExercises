/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = (head) => {
  let node = head;
  const nodes = [];
  while (node) {
    nodes.push(node.val);
    node = node.next;
  }
  for (let i = 0; i < Math.floor(nodes.length / 2); i++) {
    if (nodes[i] !== nodes[nodes.length - 1 - i]) {
      return false;
    }
  }

  return true;
};
