
//[2,4,7,11,15]

const nums = [3,4,2,4,5] 

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(nums, target) {
//     let equal = nums[0];
//     for(let i=0 ; i <= nums.length; i++){
//         for(let j=0; j<= nums.length;j++){
//             if(i == j){
//                 console.log(`i==j case`)
//                 }
//             else {
//                 equal = nums[i] + nums[j];
//                 if(equal == target){
//                     return [i, j]
//                 }            
//             }

//         }
//     }


// };


var twoSum = function(nums, target) {
    let equal = nums[0];
    for(let i=0 ; i <= nums.length; i++){
                equal = nums[i] + nums[j];
                if(equal == target){
                    return [i, j]
            }

    }


};
console.log(twoSum(nums, 9));