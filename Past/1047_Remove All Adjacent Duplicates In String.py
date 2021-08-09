class Solution:
    # T: O(n), S: O(n)
    def removeDuplicates(self, S: str) -> str:
        S = list(S)
        stack = []
        
        for i, c in enumerate(S):
            if stack == [] or stack[-1] != c:
                stack.append(c)
            else:
                stack.pop()
        
        return ''.join(stack)