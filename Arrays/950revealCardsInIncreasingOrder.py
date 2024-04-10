from collections import deque

class Solution:
    def deckRevealedIncreasing(self, deck: list[int]) -> list[int]:
        deck.sort()
        result = [0] * len(deck)
        indices = deque(range(len(deck)))
        for card in deck:
            idx = indices.popleft()
            result[idx] = card
            if indices:
                indices.append(indices.popleft())

        return result