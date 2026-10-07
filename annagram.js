class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const strMap = new Map();

        //storing the keys and accmulating value;
        for(let keys of s){
            if(strMap.has(keys)){
                console.log("when key is :", keys)
                let value = strMap.get(keys);
                strMap.set(keys, value + 1);
            }
            else{
                strMap.set(keys, 1);
            }
        }
        
        for(let values of t){
            if(strMap.has(values)){
                let value = strMap.get(values);
                if(value === 0){
                    console.log("value present only few times");
                    return false;
                }
                value = value - 1;
                strMap.set(values, values);
            }
            else {
                console.log("value not present");
                return false;
                // strMap.set(values, null);
                // console.log("S string don't have : ", values);
                
            } 
            // console.log(strMap.has(values))           
            return true;
        }

        console.log(strMap);

    }
}
const Sol = new Solution();
const result = Sol.isAnagram('air','riaa');
console.log(result)


