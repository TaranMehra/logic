class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let arr = [...s]; //typecasting
        for(let i=0; i < s.length; i++){
            if(arr.includes(`${t[i]}`)){
                let index = arr.indexOf(`${t[i]}`);
                arr.splice(index, 1);
            }
            else{
                return false;
            }
        }
        console.log("array at the end ", arr.length);
        return arr.length === 0 ? true : false;
    }
}
const Sol = new Solution();
const result = Sol.isAnagram('rcbgcc','crgbc');
console.log(result)


