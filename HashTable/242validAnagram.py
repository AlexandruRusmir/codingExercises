class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        letter_appearances = {}
        for letter in s:
            letter_appearances[letter] = letter_appearances[letter] + 1 if letter in letter_appearances else 1
        for letter in t:
            if letter not in letter_appearances or letter_appearances[letter] == 0:
                return False
            letter_appearances[letter] -= 1
        for letter in letter_appearances:
            if letter_appearances[letter] != 0:
                return False
            
        return True
            