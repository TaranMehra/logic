class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let Obj = {}
        // counting elment to make a frquency element map 

        for(let i=0; i<nums.length; i++){
           let element = nums[i];
           if(Obj[element] > 0){
                let frequency = Obj[element];
                Obj[element] = frequency + 1;
           }
           else{
             Obj[element] = 1;
           }
        }

        // bucket sort
        let arr = Object.entries(Obj); //suitable to apply bucket sort;
        let freq = Object.values(Obj).sort((a,b)=> a-b)
        let arrIndex = Array(freq.length - 1 );
        let indexFreqArray = arr.map(([number, frequency])=>{
            if(arrIndex[frequency]?.length >= 1){
                    arrIndex[frequency].push(number);
                }
                else{
                    arrIndex[frequency] = [number];
            }
            
        });

        let arrIndexflat = arrIndex.flat();
        console.log("arrIndexFlat :", arrIndexflat)
        let ans = [];
        for(let i=0; i<k; i++ ){
            ans.push(Number(arrIndexflat[(arrIndexflat.length  - 1)- i]));
        }
        return ans.reverse();

    }
}


const Sol = new Solution();
const result = Sol.topKFrequent([1,2,3,1,3,2,1,2,1,3], 2);
// const result = Sol.topKFrequent([-1000,1000,-1000,-1000,1000,1000,0,0,0,0,5], 2);
// let ElArray = [5,1,-1,-8,-7,8,-5,0,1,10,8,0,-4,3,-1,-1,4,-5,4,-3,0,2,2,2,4,-2,-4,8,-7,-7,2,-8,0,-8,10,8,-8,-2,-9,4,-7,6,6,-1,4,2,8,-3,5,-9,-3,6,-8,-5,5,10,2,-5,-1,-5,1,-3,7,0,8,-2,-3,-1,-5,4,7,-9,0,2,10,4,4,-4,-1,-1,6,-8,-9,-1,9,-9,3,5,1,6,-1,-2,4,2,4,-6,4,4,5,-5];
// const result = Sol.topKFrequent(ElArray, 8);
console.log("result is : " , result)