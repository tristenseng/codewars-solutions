/*
KYU RANK - CHALLENGE NAME
*/

/*
6 - Sort the odd
*/
function sortArray(arr) {
  let oddIndexes = []
  //indexes refering to only the odd number indexes
  //learn the modulus of negative numbers
  let oddArr = arr.filter((num, i) => (num % 2 == 1 || num % 2 == -1) && oddIndexes.push(i))


  //sort the odd numbers
  //learned arr.sort() doesnt automatically sort in ascending order
  oddArr = oddArr.sort((a,b) => a-b)


  //delete odd number indexes from arr
  for (i of oddIndexes) {
    delete arr[i]
  }


  //place odd numbers back into the empty index
  for (let i = 0; i < oddIndexes.length; i++) {
    arr[oddIndexes[i]] = oddArr[i]
  }
  return arr
}

// let ans = sortArray([1,2,3,4,5,6,7,-1,-2,-3,-4,-5,-6,-7])
// console.log(ans)











/*
6 - Consecutive strings
*/
function longestConsec(strarr, k) {
    if (strarr == "null" || strarr.length == 0 || k <= 0 || k > strarr.length) {
      return ""
    }
    else if (strarr.length == 1) {
      return strarr[0]
    }
    else if (strarr.length == k-1) {
        return strarr.join("")
    }
    let longestStrArr = []
    for (let i = 0; i <= strarr.length - k; i++) {
        longestStrArr.push(strarr.slice(i,i+k).join(""))
    }
    return longestStrArr.sort((a,b) => b.length - a.length)[0]
    //return longest element in the array
/*
k = 4
first iter: 0: 6-4= 2
slice 0, 4

second iter: 1: 2
slice 1, 5

third iter: 2: 2
slice 2, 6
*/
    
  
}
//console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2))