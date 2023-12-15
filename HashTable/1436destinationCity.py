class Solution:
    def destCity(self, paths: list[list[str]]) -> str:
        destinationsFrom = {}
        for path in paths:
            destinationsFrom[path[0]] = destinationsFrom[path[0]] + 1 if path[0] in destinationsFrom else 1
            destinationsFrom[path[1]] = destinationsFrom[path[1]] if path[1] in destinationsFrom else 0
        
        for destination in destinationsFrom:
            if destinationsFrom[destination] == 0:
                return destination