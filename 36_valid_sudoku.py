# 36. Valid Sudoku
# https://leetcode.com/problems/valid-sudoku/

class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        rows = [set() for _ in range(9)]
        cols = [set() for _ in range(9)]
        boxes = [set() for _ in range(9)]
        n = len(board)

        for i in range(n):
            for j in range(n):
                val = board[i][j]

                if val == ".":
                    continue

                box_index = (i // 3) * 3 + (j // 3)

                if val in boxes[box_index]:
                    return False
                boxes[box_index].add(val)

                if val in rows[i]:
                    return False
                rows[i].add(val)

                if val in cols[j]:
                    return False
                cols[j].add(val)
        
        return True