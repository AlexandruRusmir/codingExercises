/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = (head, n) => {
    const listNodes = [];
    let node = head;
    while (node) {
        listNodes.push(node);
        node = node.next;
    }
    if (n === listNodes.length) {
        return head.next;
    }
    listNodes[listNodes.length - n - 1].next = listNodes[listNodes.length - n + 1] ?? null;
    return head;
};