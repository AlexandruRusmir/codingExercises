class Solution:
    def onesMinusZeros(self, grid: list[list[int]]) -> list[list[int]]:
        ones_row = [0 for _ in range(len(grid))]
        ones_col = [0 for _ in range(len(grid[0]))]
        zeros_row = [0 for _ in range(len(grid))]
        zeros_col = [0 for _ in range(len(grid[0]))]
        for i in range(len(grid)):
            for j in range(len(grid[0])):
                if grid[i][j] == 0:
                    zeros_row[i] += 1
                    zeros_col[j] += 1
                else:
                    ones_row[i] += 1
                    ones_col[j] += 1

        return [[(ones_row[i] + ones_col[j] - zeros_row[i] - zeros_col[j]) for j in range(len(grid[0]))] for i in range(len(grid))]
    
s = Solution()
print(s.onesMinusZeros(grid = [[1,1,1],[1,1,1]]))