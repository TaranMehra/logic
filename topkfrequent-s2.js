class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let Count = {}
        const freq = Array.from({length: nums.length + 1}, ()=> []);
        // console.log(freq, nums.length + 1);
        //frequency fo each number
        for(const n of nums){
            // freq[n];
             Count[n] = (Count[n] || 0) + 1;
        }

        //storing only number at the frequency of the number 
        for(const n in Count){
            console.log("n", Count[n])
            freq[Count[n]].push(parseInt(n));
            // index.push(value);
        }
        console.log("Count:",Count);
        console.log("freq", freq);


        const res = [];
        for(let i=freq.length -1 ; i > 0; i--){
            for(let n of freq[i]){
                res.push(n);
                console.log(n);
                if(res.length === k){
                    return res;
                }
            }
        }

    }
}



const Sol = new Solution();
// const result = Sol.topKFrequent([1,2,3,1,3,2,1,2,1,3], 2);
const result = Sol.topKFrequent([-1000,1000,-1000,-1000,1000,1000,0,0,0,0,5], 2);
// let ElArray = [5,1,-1,-8,-7,8,-5,0,1,10,8,0,-4,3,-1,-1,4,-5,4,-3,0,2,2,2,4,-2,-4,8,-7,-7,2,-8,0,-8,10,8,-8,-2,-9,4,-7,6,6,-1,4,2,8,-3,5,-9,-3,6,-8,-5,5,10,2,-5,-1,-5,1,-3,7,0,8,-2,-3,-1,-5,4,7,-9,0,2,10,4,4,-4,-1,-1,6,-8,-9,-1,9,-9,3,5,1,6,-1,-2,4,2,4,-6,4,4,5,-5];
// const result = Sol.topKFrequent(ElArray, 8);
console.log("result is : " , result)
1518822.03
670443.20
154201.94