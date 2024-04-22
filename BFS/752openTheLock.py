from collections import deque

class Solution:
    def openLock(self, deadends: list[str], target: str) -> int:
        deadends = set(deadends)
        if target in deadends:
            return -1
        
        double_queue = deque([('0000', 0)])
        visited = set('0000')

        def getNextNumber(num: str) -> str:
            if num == '9':
                return '0'
            return str(int(num) + 1)
        
        def getPreviousNumber(num: str) -> str:
            if num == '0':
                return '9'
            return str(int(num) - 1)

        while len(double_queue):
            current_combination, moves = double_queue.popleft()

            if current_combination in visited or current_combination in deadends:
                continue
            
            visited.add(current_combination)

            if current_combination == target:
                return moves
            
            
            for i in range(4):
                move_with_next_number = current_combination[:i] + getNextNumber(current_combination[i]) + current_combination[i + 1:]
                if move_with_next_number not in visited:
                    double_queue.append((move_with_next_number, moves + 1))
                move_with_previous_number = current_combination[:i] + getPreviousNumber(current_combination[i]) + current_combination[i + 1:]
                if move_with_previous_number not in visited:
                    double_queue.append((move_with_previous_number, moves + 1))

        return -1