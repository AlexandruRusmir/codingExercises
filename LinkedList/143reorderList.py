# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reorderList(self, head: Optional[ListNode]) -> None:
        """
        Do not return anything, modify head in-place instead.
        """
        nodes = []
        node = head
        while node:
            nodes.append(node)
            node = node.next

        node = head
        visited = {}
        while True:
            last = nodes.pop()
            next = node.next
            visited[node] = True
            if visited.get(last, False):
                node.next = None
                break
            node.next = last
            visited[last] = True
            node = node.next
            if visited.get(next, False):
                node.next = None
                break
            node.next = next
            node = node.next
"""
It starts by traversing the linked list and pushing each node onto a stack. This effectively reverses the order of nodes.
Then it starts traversing the list again from the beginning.
During this traversal, it pops a node from the stack, connects it to the current node in the traversal, and moves forward.
It continues this process until it encounters a situation where the current node and the node at the top of the stack are the same, which indicates the mid-point of the list.
At this point, it breaks the connection to the next node (to avoid cycles) and stops the process.
"""