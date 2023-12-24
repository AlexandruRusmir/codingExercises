class Solution:
    def minOperations(self, s: str) -> int:
        def getFinalStringForLengthStartingWith(length: str, startWith: str) -> str:
            str = ''
            if startWith == '1':
                for i in range(length):
                    if i % 2 == 0:
                        str += '1'
                    else:
                        str += '0'
            else:
                for i in range(length):
                    if i % 2 == 0:
                        str += '0'
                    else:
                        str += '1'
            
            return str

        finalStringStartingWith1 = getFinalStringForLengthStartingWith(len(s), '1')
        finalStringStartingWith0 = getFinalStringForLengthStartingWith(len(s), '0')
        
        numberOfChangesToGetFrom1 = 0
        for i in range(len(s)):
            if s[i] != finalStringStartingWith1[i]:
                numberOfChangesToGetFrom1 += 1

        numberOfChangesToGetFrom0 = 0
        for i in range(len(s)):
            if s[i] != finalStringStartingWith0[i]:
                numberOfChangesToGetFrom0 += 1
        
        return min(numberOfChangesToGetFrom0, numberOfChangesToGetFrom1)
    

s = Solution()
print(s.minOperations("0100"))
print(s.minOperations("1111"))