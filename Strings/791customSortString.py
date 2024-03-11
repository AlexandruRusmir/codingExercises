class Solution:
    def customSortString(self, order: str, s: str) -> str:
        letter_appearances = {}
        for letter in s:
            letter_appearances[letter] = letter_appearances.get(letter, 0) + 1
        result_string = ''
        for letter in order:
            if letter in letter_appearances:
                result_string += letter * letter_appearances[letter]
                del letter_appearances[letter]
        for letter, letter_appearance in letter_appearances.items():
            result_string += letter * letter_appearance
        
        return result_string