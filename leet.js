/*
DIFFICULTY - CHALLENGE NAME
*/


/**
 * Easy - Two Sum
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let result = []
  for (let i = 0; i < nums.length-1;i++) {
      for (let j = 1; j < nums.length; j++) {
          if (nums[i] + nums[j] == target && i != j) {
              result.push(i)
              result.push(j)
              return result
          }

      }
  }
};


/*
Easy (LeetCode) - Array Prototype Last
*/
Array.prototype.last = function() {
    if (this.length < 1) {
      return -1
    }
    return this[this.length-1]
  };
  
  const arr = [1,2,3,78]
  console.log(arr.last())