/**
 * @param {number[]} nums
 */
var NumArray = function(nums){
    this.cache = [0];
  // cache running sum
  for(let i = 0; i < nums.length; i++) {
      this.cache[i + 1] = nums[i] + this.cache[i];
  }
    
};

NumArray.prototype.sumRange = function(left, right) {
    left++;
    right++;
    return this.cache[right] - this.cache[left - 1];
};