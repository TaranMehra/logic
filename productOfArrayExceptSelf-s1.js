// for every element has O(n) complexity
class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
       let ans = [];
       for(let i=0; i<nums.length; i++){
            let except = nums[i];
            let prefixProduct = 1;
            let postProduct = 1;
            // console.log("Current : ",nums[i]);
            for(let pre=0; pre<i; pre++){
                prefixProduct *=  nums[pre];
                // console.log(nums[pre]);

            }
            for(let post=i+1; post<nums.length ; post++){
                postProduct *=  nums[post];
                // console.log(nums[post]);
            }
            if(prefixProduct == -0 || postProduct == -0){
                prefixProduct = 0;
                postProduct = 0;
            }
            ans[i] = prefixProduct * postProduct;
            // console.log("prefixProduct : ", postProduct);
        }
        return ans;
    }
}

const Sol = new Solution();
let value = [1,2,4,6];
// let value = [-1,0,1,2,3] //[0,-6,0,0,0]
let result = Sol.productExceptSelf(value);
console.log("result:",result);


