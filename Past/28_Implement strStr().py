class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        if not haystack and not needle:
            return 0
        elif not needle:
            return 0
        
        pArray = self.build_pattern(needle)
        
        n, m = len(haystack), len(needle)
        i, j = 0, 0
        
        while i < n:
            if haystack[i] == needle[j]:
                i += 1
                j += 1
            else:
                if j > 0:
                    j = pArray[j - 1]
                else:
                    i += 1
            
            if j == m:
                return i - m
        
        return -1
        
        
    def build_pattern(self, pattern):
        m = len(pattern)
        pArray = [0] * m
        i, j = 1, 0
        
        while i < m:
            if pattern[i] == pattern[j]:
                pArray[i] = j + 1
                j += 1
                i += 1
            else:
                if j > 0:
                    j = pArray[j - 1]
                else:
                    pArray[i] = 0
                    i += 1
        return pArray
    
    