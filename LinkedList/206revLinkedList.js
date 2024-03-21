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
const reverseList = (head) => {
  if (!head || !head.next) {
    return head;
  }
  let next = head.next;
  let prev = head;
  head.next = null;
  while (next) {
    const temp = next.next;
    next.next = prev;
    prev = next;
    next = temp;
  }

  return prev;
};
