class Solution:
    def validPalindrome(self, s: str) -> bool:
        # Two Pointer
        # O(n) / O(n)
        l, r = 0, len(s) - 1
        
        while l < r:
            if s[l] != s[r]:
                chk1, chk2 = s[l:r], s[l + 1: r + 1]
                return chk1 == chk1[::-1] or chk2 == chk2[::-1]
            l, r = l + 1, r - 1        
        return True
    