// for every element has O(n) complexity
class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let ans = [];
        for(let i=0; i<nums.length; i++){
            
            let currentArr = nums.filter((value)=> value !== nums[i]);
            // console.log("when :",currentArr);
            let product = 1;
            for(let j=0; j < currentArr.length; j++){
                // console.log("product:", product);
                product = product * currentArr[j];
                // console.log(currentArr[j]);
                
            }
            if(product == 0){
                ans[i] = 0;
            }
            else{
                ans[i]= product;
            }
            product = 1;
        }
        return ans;

    }
}

const Sol = new Solution();
// let value = [1,2,4,6];
let value = [-1,0,1,2,3] //[0,-6,0,0,0]
let result = Sol.productExceptSelf(value);
console.log("result:",result);


