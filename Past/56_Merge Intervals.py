class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        # O(log(n))
        s_intervals = sorted(intervals, key = lambda x : x[0])
        
        i = 0
        
        # O(n)
        while i < len(s_intervals) - 1:
            if s_intervals[i][1] >= s_intervals[i + 1][0]:
                s_intervals[i][1] = max(s_intervals[i][1], s_intervals[i + 1][1])
                del s_intervals[i + 1]
            else:
                i += 1
         
        # O(nlog(n))
        return s_intervals