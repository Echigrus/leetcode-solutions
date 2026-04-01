# 49. Group Anagrams
# https://leetcode.com/problems/group-anagrams/

class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        def get_key(word: str):
            counts = [0] * 26
            for char in word:
                index = ord(char) - ord('a')
                counts[index] += 1
            return tuple(counts)
        
        anagram_map = defaultdict(list)

        for word in strs: 
            anagram_map[get_key(word)].append(word)

        return list(anagram_map.values())