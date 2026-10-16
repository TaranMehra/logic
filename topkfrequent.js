class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
	topKFrequent(nums, k) {
			let hashtable = new Map();
			let valueKeyHashTable = new Map();
			let freqArrUnsorted = [];
			
			for(let i=0; i< nums.length; i++){ //n
				if(hashtable.has(nums[i])){
					let v = hashtable.get(nums[i]);
					hashtable.set(nums[i], v + 1);
				}
				else{
							hashtable.set(nums[i], 1);
						}
			}
			let ans = [];
			hashtable.forEach((key, value)=>{  
				if(valueKeyHashTable.has(key)){
					let arrVal = valueKeyHashTable.get(key);
					arrVal.push(value);
				}
				else{
					valueKeyHashTable.set(key, [value]);
				}
				freqArrUnsorted.push(key)
			});
			
			let freqArrSorted = freqArrUnsorted.sort((a,b)=> b-a)    //sort((a,b)=> a-b).reverse();
			console.log(valueKeyHashTable);
			

			for(let i=0; i<k;){
					if(valueKeyHashTable.has(freqArrSorted[i]) && valueKeyHashTable.get(freqArrSorted[i]).length > 1){
							valueKeyHashTable.get(freqArrSorted[i]).reverse().map((value)=>{
									if(i<k){
											ans.push(value);
											i = i + 1;
									}
							})
					}
					else{
							ans.push(valueKeyHashTable.get(freqArrSorted[i])[0]);
							i = i + 1;

					}
			}

			return ans;
	}
}


const Sol = new Solution();
// const result = Sol.topKFrequent([1,2,3,1,3,2,1,2,1,3], 4);
const result = Sol.topKFrequent([-1000,1000,-1000,-1000,1000,1000,0,0,0,0,5], 2);
// let ElArray = [5,1,-1,-8,-7,8,-5,0,1,10,8,0,-4,3,-1,-1,4,-5,4,-3,0,2,2,2,4,-2,-4,8,-7,-7,2,-8,0,-8,10,8,-8,-2,-9,4,-7,6,6,-1,4,2,8,-3,5,-9,-3,6,-8,-5,5,10,2,-5,-1,-5,1,-3,7,0,8,-2,-3,-1,-5,4,7,-9,0,2,10,4,4,-4,-1,-1,6,-8,-9,-1,9,-9,3,5,1,6,-1,-2,4,2,4,-6,4,4,5,-5];
// const result = Sol.topKFrequent(ElArray, 8);
console.log("result is : " , result)


// “Redo Top K Frequent with a heap after the heaps topic.”