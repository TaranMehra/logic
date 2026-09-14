const nums = [3,4,2,5,4];
let sArr = [];

for(let i =0; i < nums.length ; i++){
    if(nums[i] > nums[i+1]){
        console.log(`${nums[i]} > ${nums[i+1]}`);
        sArr[i] = nums[i+1];
    }
    else if(nums[i] <= nums[i+1]){
        console.log(`${nums[i]} <= ${nums[i+1]}`);
        sArr[i] = nums[i];
    }
}

console.log(sArr);