/*
KYU RANK - CHALLENGE NAME
*/

/*
6 - Stop gninnipS My sdroW!
*/
//given a string
//return a string with all words of length 5 or more, reversed
function spinWords(string){
  //split string into array of all the words
  let wordArr = string.split(" ")
  //iterate through array and search for words with length 5 or more
  //if a word has length 5 or more then reverse it
  for (i in wordArr) {
    if (wordArr[i].length >= 5) {
      wordArr[i] = wordArr[i].split("").reverse().join("")
    }
  }
  return wordArr.join().replaceAll(","," ")
}
//console.log(spinWords("Welcome to the land of milk and honey"))









/*
6 - Who likes it?
*/
//create a like system.
//given an array of names
//return these string statements indicating amount of likes
//possibly refactor
function likes(names) {
  nameStr = " like this"
  //if no names returned
  if(names.length == 0) {
    return "no one likes this"
  }
  //if 1 name returned
  else if(names.length == 1) {
    return `${names[0]} likes this`
  }
  //if 2 names returned
  else if(names.length == 2){
    return `${names[0]} and ${names[1]}`.concat(nameStr)
  }
  //if 3 names returned
  else if(names.length == 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`
  }
  //if >3 names returned
  else {
    let num = names.length-2
    return `${names[0]}, ${names[1]} and ${num} others like this`
  }
}
//console.log(likes(['bob','jim','jerry','goenka']))










/*
8 - Beginner Series #4 Cockroach
*/
//argument takes in a km per hour speed
//return speed in cm per second
function cockroachSpeed(s) {

  //   km/h * h/3600s * 100000cm/km = km/s
  //   why 250/9? work out the math then simplify
  return Math.floor(s*(250/9))
}
//returns 30
//console.log(1.08)










/*
6 - Find the odd int
*/
//argument takes in an array of integers
//only one of those integers will appear an odd number of times within
//the array
//return that odd number
function findOdd(A) {

  //iterate through A array to add keys : values to counter dictionary
  //keys being the numbers in A array
  //values being how many times they show up
  let counter = {}
  for (let prop of A) {
    if (counter.hasOwnProperty(prop)) {
        counter[prop] += 1
    }
    else {
      counter[prop] = 1
    }
  }

  //iterate through counter and find the first odd value
  //return the odd value
  for (let key of Object.keys(counter)) {
    if (counter[key] % 2 == 1) {
      return Number(key)
    }
  }
}
//console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]))










/*
6 - Sort the odd
*/
//array takes in an array of numbers
//return the odd numbers sorted in ascending order
//leave the even numbers where they are
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
//starr is an array of strings
//k is the amount of times we would like to concatenate
//strings consecutive to one another
//return the longest concatenated string given the k constraint
function longestConsec(strarr, k) {
    //take care of edge cases/simple cases
    if (strarr == "null" || strarr.length == 0 || k <= 0 || k > strarr.length) {
      return ""
    }
    else if (strarr.length == 1) {
      return strarr[0]
    }
    else if (strarr.length == k-1) {
        return strarr.join("")
    }

    //push concatenated strings onto longestStrArr
    let longestStrArr = []
    for (let i = 0; i <= strarr.length - k; i++) {
        longestStrArr.push(strarr.slice(i,i+k).join(""))
    }

    //make an array sorted by string length (longest string first)
    //return the 0th element in the array (the longest string)
    return longestStrArr.sort((a,b) => b.length - a.length)[0]
}
//console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2))