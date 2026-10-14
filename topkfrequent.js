class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let hashtable = new Map();
        let uniqueSet = new Set(nums);

        
        // makign hashtable 
        for(let i=0; i< nums.length; i++){
            if(hashtable.has(nums[i])){
                let v = hashtable.get(nums[i]);
                hashtable.set(nums[i], v + 1);
                if(uniqueSet.has(nums[i])){
                    uniqueSet.delete(nums[i]);
                    uniqueSet.add(nums[i]);
                }
                else{
                    // all values let if values never occur so  it change the location of value
                    // uniqueSet.clear();
                    uniqueSet.set(nums[i], 1);

                }
            }
            else{
                    hashtable.set(nums[i], 1);
                }

            
        }
        
        console.log("hashtable : ", hashtable);
        console.log("uniqueSet : ", uniqueSet);
        

        // for k returning numbers
        let recurrenceElments = [...uniqueSet];
        console.log("sorted array : ", recurrenceElments.sort())

        let ans = [];
        for(let i = 1 ; i <= k; i++){
            // console.log("most occur elements :",recurrenceElments[recurrenceElments.length - i]);
            ans.push(recurrenceElments[recurrenceElments.length - i]);
        }
        return ans;
        
    }
}


const Sol = new Solution();
// const result = Sol.topKFrequent([1,2,2,31,1,3,1,3,2,3,1], 2);
const result = Sol.topKFrequent([-1000,-1000,-1000,1000,1000,0,0,0,0,5], 2);


console.log("result is : " , result)
// console.log("")