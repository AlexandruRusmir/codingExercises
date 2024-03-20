/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeInBetween = (list1, a, b, list2) => {
  const resultHead = new ListNode(list1.val);
  let node = resultHead;
  let aNode = list1.next;
  let i = 1;
  while (i < a) {
    const newNode = new ListNode(aNode.val);
    node.next = newNode;
    node = newNode;
    aNode = aNode.next;
    i++;
  }
  let bNode = list2;
  while (bNode) {
    const newNode = new ListNode(bNode.val);
    node.next = newNode;
    node = newNode;
    bNode = bNode.next;
  }
  while (i <= b) {
    aNode = aNode.next;
    i++;
  }
  while (aNode) {
    const newNode = new ListNode(aNode.val);
    node.next = newNode;
    node = newNode;
    aNode = aNode.next;
  }

  return resultHead;
};
