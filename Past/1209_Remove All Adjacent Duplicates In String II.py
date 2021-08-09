class Solution:
    # T: O(n), S: O(n)
    def removeDuplicates(self, s: str, k: int) -> str:
        s = list(s)    
        stack = []
        cStack = []
    
        for i, c in enumerate(s):
          if stack == []:
            stack.append(c)
            cStack.append(1)
          elif stack[-1] == c and cStack[-1] == k-1:  
            cStack.pop()
            for j in range(k-1):
              stack.pop()
          elif stack[-1] != c:
            stack.append(c)
            cStack.append(1)
          elif stack[-1] == c:
            stack.append(c)
            cStack[-1] = cStack[-1] + 1
          
        return ''.join(stack)