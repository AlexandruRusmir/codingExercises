class Solution:
    def findContentChildren(self, g: list[int], s: list[int]) -> int:
        g.sort()
        s.sort()
        i = 0
        j = 0
        content_children = 0
        while i < len(g) and j < len(s):
            if g[i] <= s[j]:
                content_children += 1
                i += 1
                j += 1
            else:
                j += 1
        
        return content_children
    
s = Solution()
print(s.findContentChildren(g = [1,2,3], s = [1,1]))
print(s.findContentChildren(g = [1,2], s = [1,2,3]))