class Solution:
    def isPathCrossing(self, path: str) -> bool:
        position = [0, 0]
        past_positions = {'0_0': True}
        for move in path:
            if move == 'N':
                position[1] += 1
            elif move == 'S':
                position[1] -= 1
            elif move == 'E':
                position[0] += 1
            elif move == 'W':
                position[0] -= 1

            pos_hash = str(position[0]) + '_' + str(position[1])
            if pos_hash in past_positions:
                return True
            past_positions[pos_hash] = True
        
        return False



s = Solution()
print(s.isPathCrossing("NES"))
print(s.isPathCrossing("NESWW"))