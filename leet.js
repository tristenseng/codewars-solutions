/*
DIFFICULTY - CHALLENGE NAME
*/





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