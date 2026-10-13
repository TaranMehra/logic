class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let sArr = [...s];
        let tArr = [...t];
        // console.log(sArr, tArr)
        if(sArr.sort().join('')== tArr.sort().join('')){
            return true;
        };
        return false;
    }
}

const Sol = new Solution();
const result = Sol.isAnagram('ria','aira');
console.log(result)