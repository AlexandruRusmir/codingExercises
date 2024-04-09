class Solution:
    def timeRequiredToBuy(self, tickets: list[int], k: int) -> int:
        time_required = 0
        target_tickets = tickets[k]
        for ticket in tickets:
            time_required += min(target_tickets, ticket)
        for i in range(len(tickets) - 1, k, -1):
            if tickets[i] >= target_tickets:
                time_required -= 1
        return time_required
    
    # A single pass, better:
    def timeRequiredToBuy(self, tickets: list[int], k: int) -> int:
        time_required = 0

        for i, ticket in enumerate(tickets):
            if i <= k:
                time_required += min(ticket, tickets[k])
            else:
                time_required += min(ticket, tickets[k] - 1)

        return time_required