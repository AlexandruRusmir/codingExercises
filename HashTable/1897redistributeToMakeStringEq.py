class Solution:
    def makeEqual(self, words: list[str]) -> bool:
        letters = {}
        for word in words:
            for letter in word:
                letters[letter] = letters.get(letter, 0) + 1
        
        for letter in letters:
            if letters[letter] % len(words) != 0:
                return False
            
        return True

s = Solution()
print(s.makeEqual(["abc","aabc","bc"]))