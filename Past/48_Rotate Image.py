class Solution:
    def rotate(self, matrix: List[List[int]]) -> None:
        # O((n^2))
        matrix.reverse()
        
        for i in range(len(matrix)):
            for j in range(i):
                matrix[j][i], matrix[i][j] = matrix[i][j], matrix[j][i]