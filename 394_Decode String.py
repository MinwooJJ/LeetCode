class Solution:
    def decodeString(self, s: str) -> str:
        # T: O(n), S: O(n)
        stack = []
        num = 0
        deStr = ''
        
        for c in s:
            if c == '[':
                stack.append(deStr)
                stack.append(num)
                deStr = ''
                num = 0
            elif c == ']':
                n = stack.pop()
                pDeStr = stack.pop()
                deStr = pDeStr + n*deStr
            elif c.isdigit():
                num = num*10 + int(c)
            else:
                deStr += c
                
        return deStr
                