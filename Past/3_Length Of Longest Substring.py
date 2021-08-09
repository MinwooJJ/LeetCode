class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        # T: O(n), S: O(1)
        dic, res, start = {}, 0, 0
                
        for i, ch in enumerate(s):
            # check if char is in dic    
            if ch in dic:
                # check length
                res = max(res, i - start)
                # update start pointer
                start = max(start, dic[ch] + 1)
            
            # add char to dic
            dic[ch] = i      
    
        return max(res, len(s) - start)