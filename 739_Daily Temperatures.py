class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        # T: O(n), S: O(n)
        ans = [0] * len(temperatures)
        stack = []
        
        # iterate temp lists
        for i, t in enumerate(temperatures):
            # if the stack has a temp value greater than the next value
            # stack it on the stack until find a temp value greather than it
            # it finds a temp value greater than it, stack runs pop
            while stack and temperatures[stack[-1]] < t:
                prev_i = stack.pop()
                ans[prev_i] = i - prev_i
            stack.append(i)
            
        return ans