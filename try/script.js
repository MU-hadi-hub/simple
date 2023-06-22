var removeDuplicates = function(nums) {
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
      if (nums[i] !== nums[j]) {
        i++;
        nums[i] = nums[j];
      }
    }
    return i + 1;
  }
let nums =[1,1,2];
console.log(nums);
let k = removeDuplicates(nums);
console.log(nums);
console.log(k);