/*
KYU RANK - CHALLENGE NAME
*/

/*
6 - Does my number look big in this?
*/
//An Armstrong number is a positive number which is the sum of its own
//digits, each digit raise to the power of the number of digits in the
//number
//return true if the argument passed in is an Armstrong number
function narcissistic(number) {
  //convert number to string
  number = String(number)
  
  //convert string to array
  let narcNum = Array.from(number)

  //reduce method on the array of elements Number(string)
  narcNum = narcNum.reduce((iter, val) => Math.pow(Number(val),number.length)+Number(iter),0)

  //return bool value with if statement
  if (number == narcNum) {
    return true
  }
  return false
}
console.log(narcissistic(153));




/*
6 - Multiples of 3 or 5
*/
//If we list all the natural numbers below 10 that are multiples of 3 or 5, 
//we get 3, 5, 6 and 9. The sum of these multiples is 23.
//Finish the solution so that it returns the sum of all the multiples 
//of 3 or 5 below the number passed in. 
//Additionally, if the number is negative, return 0
function solution(n){
  //input validation
  if (n < 1) {
    return 0
  }
  else {
    //for loop that iterates to n
    //adds any multiple of 3 or 5 to the set
    let mults = new Set();
    for (let i = 1; i < n; i++) {
      if (i % 3 == 0 || i % 5 == 0) {
        mults.add(i)
      }
    }
    //return sum of all values within the set
    return [...mults].reduce((iter, val) => val + iter, 0)
  }
  
}
//console.log(solution(10))





/*
7 - Sum of odd numbers
*/
//given a triangle of consecutive odd numbers
//calculate the sum of the numbers in the nth row of the triangle
//return sum
//n=1 ; ans=1
//n=2 ; ans=8
//n=3 ; ans=27
//n^3
function rowSumOddNumbers(n) {
  return Math.pow(n,3)
}



/*
7 - Flatten and sort an array
*/
//given a 2d array
//return 'flattened' array (1d) in ascending order
//return empty array if empty
function flattenAndSort(array) {
  //join array
  //split into 1d array w individual numbers
  //sort that array
  let arr = array.join().split(',').sort((a,b) => a-b)
  //filter array to remove empty strings
  //turn each string element into integer
  return arr.filter(val => val != "").map(val => Number(val))
}
flattenAndSort([[1, 3, 5], [100], [2, 4, 6]])








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