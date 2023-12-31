class Solution:
    def maxLengthBetweenEqualCharacters(self, s: str) -> int:
        first_letter_apperance = {}
        result = -1
        for i in range(len(s)):
            if s[i] in first_letter_apperance:
                result = max(result, i - first_letter_apperance[s[i]] - 1)
            else:
                first_letter_apperance[s[i]] = i
        
        return result
    
s = Solution()
print(s.maxLengthBetweenEqualCharacters("abca"))