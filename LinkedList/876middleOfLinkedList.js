/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const middleNode = (head) => {
  const listNodes = [];
  let node = head;
  while (node) {
    listNodes.push(node);
    node = node.next;
  }
  return listNodes.length % 2 === 0
    ? listNodes[listNodes.length / 2]
    : listNodes[Math.floor(listNodes.length / 2)];
};
