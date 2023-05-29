/*
KYU RANK - CHALLENGE NAME
*/


/*
8 - cat years, dog years
param - integer representing human years
return - array of integers representing [human, cat, dog]
humanYearsCatYearsDogYears(1) == [1,15,15]
*/
var humanYearsCatYearsDogYears = function(humanYears) {
  if (humanYears == 1) {
    return [1,15,15]
  }
  else if (humanYears == 2) {
    return [2,24,24]
  }
  else if (humanYears > 2) {
    let catYears = 24 + ((humanYears-2)*4) 
    let dogYears = 24 + ((humanYears-2)*5)
    return [humanYears, catYears, dogYears];
  }

}


/*
8 - invert values
*/
function invert(array) {
  return array.map(x => x*-1)
}


/*
6 - common array elements
*/
//param - 3 arrays of integers - no input validation
//return - the common elements in all the arrays added together
//example - console.log(common([1,2,3],[5,3,2],[7,3,2])) == 5
//
function common(a,b,c){
  //iterate through array a
  //if the element is in both array b and c then splice it
  //then push to finalArr
  //reduce method on finalArr
  let finalArr = []
  for (let i = 0; i < a.length; i++) {
    let temp = a[i]
    if (b.includes(temp) && c.includes(temp)) {
      b.splice(b.indexOf(temp), 1)
      c.splice(c.indexOf(temp), 1)
      finalArr.push(temp)
    }
  }
  return finalArr.reduce((accum, num) => num+accum, 0)
}
let a = [1,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]
let b = [9, 86, 7, 1, 2, 3,17]
let c = [1,2,3,4,5,6,7,8,9,3421,17]
console.log(common(a,b,c))
//1,3,7,9 == 20


/*
8 - Sum Arrays
params - array of integers
return - sum of the numbers
example - sum([]) == 0
          sum([1, 5, 6, -4, -2.5]) == 5.5
*/
function sum(numbers) {
  return numbers.reduce((accum, num) => num + accum, 0)
};


/*
7 - debug basic calc
 */
const calculate = (a, op, b) => {
	switch (op) {
		case "+": return a + b
		case "-": return a - b
		case "*": return a * b
		case "/": return b ? a / b : null
	}

	return null
}


/*
7 - say hello world js style
 */
var say = function(string1) {
  return function(string2) {
    return `${string1} ${string2}`
  }
}
//console.log(say("hello")("world"))



/*
7 - Over The Road
*/
//param - address and n houses on each side of the street
//we need the opposite address across the street from the argument address
//address pattern given
//return - the opposite side of the street's address
function overTheRoad(address, n){
  //if address is even/odd...
  //find the index of the argument address
  let index;
  let answer;;
  //even address
  if (address % 2 == 0) {
    index = address/2
    answer = 2*(n-index) + 1
  }
  //odd address
  else {
    index = n - (address-1)/2
    answer = 2*index
  }
  //2(n-i) + 1 = odd address
  //2i = even address
  return answer
  //return index address of across the street
}
//console.log(overTheRoad(1,3)) == 6ß


/*
7 - A Promise is a Promise
no parameter
return - a resolved promise that returns hello world
both solutions below are the same!
*/
// async function promiseHelloWorld() {

//   return "Hello World!"
// }

function promiseHelloWorld() {
  return Promise.resolve("Hello World!")
}

//console.log(promiseHelloWorld())



/*
6 - Array of Lists of Sets
*/
//params - array of strings - assume all lowercase
//return - strings of the same characters - add their indices
//console.log(solve(["abc","abbc","ab","xyz","xy","zzyx"])) == [1,8]
function solve(arr){
  //iterate through array
  //turn each string to a set
  //sort
  let arrOfSets = []
  for (let i in arr) {
    arr[i] = arr[i].split("").sort()
    arrOfSets.push(new Set(arr[i]))
  }


  //add set to dictionary and add up the indexes of matching sets
  let result = {}
  let final = {}
  for(let i in arrOfSets) {
    let currSet = [...arrOfSets[i]]
    if (result[currSet] != undefined) {
      result[currSet] += Number(i)
      //making it into this conditionals means theres another matching element
      //so push that into the final set
      final[currSet] = result[currSet]
    }
    else {
      result[currSet] = Number(i)
    }

  }

  return Object.values(final).sort((a,b) => a-b) 

};
//console.log(solve(["abc","abbc","ab","xyz","xy","zzyx"])) //[1,8]








/*
8 - Fake Binary
*/
//p - given a string of digits
//r - fake binary string
//fakeBin('45385593107843568') == '01011110001100111'
function fakeBin(x){
  x = x.split("")
  let fakeBin = []
  for (let ch of x) {
    if (ch < 5) {
      fakeBin.push(0)
    }
    else {
      fakeBin.push(1)
    }
    
  }
  return fakeBin.join("")
}
//console.log(fakeBin('45385593107843568'))



/*
6 - Unique In Order
were given a string as an argument
return array of elements without any elements with same value next to each other
elements can repeat just cant be next to each other
console.log(uniqueInOrder('AAAABBBCCDAABBB')) //['A', 'B', 'C', 'D', 'A', 'B']
*/
var uniqueInOrder=function(iterable){
  
  //loop the iterable string
  let uniqueArr = []
  let unique = false;
  for (let ch of iterable) {
    //if ch is not equivalent to the last element in the array
    if (ch != uniqueArr[uniqueArr.length - 1]) {
      uniqueArr.push(ch)
    }

  }
  return uniqueArr
  //place iterable element into new array if meet some conditions
  //return new array
  
}



/*
6 - Playing with digits

take digits of n and raise to successive power of p

p - positive integer n, positive integer p

r - return positive integer k

*/

function digPow(n, p){
  let nArr = n.toString().split("")
  nArr = nArr.map(Number).reduce((accum, num) => Math.pow(num, p++) + accum, 0)
  let k = nArr/n
  if (k == Math.floor(nArr/n)) {
      return k

      }

  return -1

}




/*
6 - Detect Pangram
*/
//given a string, potentially a pangram
//return true or false depending on if the the string is a pangram or not
//let string = "The quick brown fox jumps over the lazy dog."
//console.log(isPangram(string))
// == true
function isCharALetter(char) {
  return (char.toLowerCase() != char.toUpperCase())
}

function isPangram(string){
  /*
  traverse over the string
  look at each element and check if it is indeed a letter
  add letter to set if indeed a letter
  check if set is length 26
  if whole string traversed without letter being sent false then true
  */
  let set = new Set();
  for (let letter of string) {
    if (isCharALetter(letter)) {
      set.add(letter.toLowerCase())
    }
  }
  return [...set].length == 26
}
let string = "The quick brown fox jumps over the lazy dog."
//console.log(isPangram(string))
//f(x) = y




/*
6 - Remove the parenthese
*/
//given a string (with stuff inside of parentheses)
//return a string (without stuff inside parentheses and without the parentheses)
//removeParentheses("here is a (unwanted) thing") == "here is a thing"
function removeParentheses(s){
  //iterate through string
  //if we come across an open parenthese remove each char after until we come across close parenthese
  let counter = 0;
  let result = ""
  for (let letter of s) {
    if (letter == '(') {
      counter++
    }
    if (counter == 0) {
      result += letter
    }
    if (counter > 0 && letter == ')') {
      counter--
    }  
  }
  return result
}
// console.log(removeParentheses("here is a (unwanted) thing"))


/*
8 - Quarter of the year
*/
//p - integer representing the month
//r - the quarter of the year it belongs to
//console.log(quarterOf(3)) //1
const quarterOf = (month) => {
  console.log(month)
  return Math.ceil(month/3)
}
//console.log(quarterOf(3))

/*
6 - ...Eureka!!
*/
//p - two integers, defining a range of values (b is inclusive)
//make a property that returns an array of values between the range of values given in the argument
//sumDigPow(1, 10) == [1, 2, 3, 4, 5, 6, 7, 8, 9]
//sumDigPow(90, 150) == [135]

function sumDigPow(a, b) {
  // iterate from a to b
  let eurekaValues = []

  for (let i = a; i <= b; i++) {
    if (i.toString().length == 1) {
      eurekaValues.push(i)
    }
    // check each value to see if it equal to itself still when ran through some function
    else {
      let val = i.toString().split("").map(Number).reduce((accum, val, i) => Math.pow(val, i+1) + accum, 0)
      if (val == i) {
        eurekaValues.push(i)
      }
    }
  }
  
  return eurekaValues
}
// console.log(sumDigPow(1, 10))
// console.log(sumDigPow(90, 150))



/*
6 - The Supermarket Queue
*/
//an array of positive integers representing how long customers will take, n the amount of registers available
//return how long itll take to get all the customers checked out
function queueTime(customers, n) {
  //create n lanes
  let lanes = Array(n).fill(0)
  //find shortest lane
  //add next person in queue to shortest lane
  //return longest queue (the last customer to be served in the queue)
  for (cust of customers) {
    let nextMinLane = lanes.indexOf(Math.min(...lanes))
    lanes[nextMinLane] += cust
  }
  return Math.max(...lanes)

}



//console.log(queueTime([2, 3, 10], 2)) == 12
// queueTime([1, 7, 5, 3], 3) == 7








/*
8 - Powers of 2
recieve a value n. return a list of all powers of 2 with the exponent ranging from 0 to n
p - non-negative integer
r - array of integers
e -
*/
function powersOfTwo(n) {
  //iterate from 0 to n
  let nArr = []
  for (let i = 0; i <= n; i++) {
  //power of 2 to n
  nArr.push(Math.pow(2,i))
  //push to array
  }
  return nArr


}

// console.log(powersOfTwo(2)) //[2^0, 2^1, 2^2] [1,2,4]
// console.log(powersOfTwo(3)) //[2^0, 2^1, 2^2, 2^3] [1,2,4,8]














/*
8 - Count of positives / sum of negatives
p - array of integers (check for empty/null array)
r - array of integers , first value is the count of positive numbers, 2nd is sum of negatives
e - function countPositivesSumNegatives(input) {
  check for empty or null array
  //iterate through arg
  //if < 0 else if > 0 //ignore zero edge case or include with the negative sums(lets us simplify the if statement)
    iterate positive or accumulate into negative depending on condition
  return [countPositive, sumNegative]
}
let arr - [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]
console.log(countPositivesSumNegatives(arr)) == [10, -65]
*/
function countPositivesSumNegatives(input) {
  let countPositive = 0
  let sumNegative = 0
  if (!Array.isArray(input) || !input.length) {
    return []
  }
  for (i in input) {
    if (input[i] < 1) {
      sumNegative+=input[i]
    }
    else {

      countPositive++
    }
  }
  return [countPositive, sumNegative]
}

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]
// console.log(countPositivesSumNegatives(arr)) == [10, -65]












/*
7 - Between Extremes
p - array of integer values
r - return the difference between largest and smallest value
e - betweenExtremes([-23,0,23,1,2,54,66]) == 89

*/
function betweenExtremes(numbers) {
  //math min/max
  let min = Math.min(...numbers)
  let max = Math.max(...numbers)
  return max-min
  //return math.max - math.min
}
// let arr = [-23,0,23,1,2,54,66] //89
// console.log(betweenExtremes(arr))




/*
7 - Find the next perfect square
*/
//parameter is an integer (potential perfect square) no input validation
//return the next integral perfect square if the one passed in the parameter is indeed a perfect square
//examples function findNextSquare(sq) {...} findNextSquare(625) == 676
//return Math.pow(n+1, 2) ; n being the sqrt of the argument value assuming it is indeed a perfect square
//conditional check if sqrt of sq is integer
//if it is take 2nd power of sqrt of sq+1
//return power of (Math.power(sqrt(sq)+1,2)
function findNextSquare(sq) {
  const squareRoot = Math.sqrt(sq)
  if (Number.isInteger(squareRoot)) {
    return Math.pow(squareRoot+1,2)
  }
  return -1
}
// console.log(findNextSquare(625))
// console.log(findNextSquare(654))


/*
7 - Jaden Casing Strings
*/
//no parameters its a string property
//return string of capitalized first letter of each word
//example String.prototype.toJadenCase function () {...}
//let str = "this is a string"
//str = str.toJadenCase() //"This Is A String"
String.prototype.toJadenCase = function () {
  let strArr = [...this]
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i-1] == " " || strArr[i-1] == undefined) {
      strArr.splice(i,1,`${strArr[i].toUpperCase()}`)
    }
  }
  return strArr.join("")
};
// let str = "this is a string"
// console.log(str.toJadenCase())











/*
7 - Categorize New Member
parameter - array of arrays of length two (pairs)
return - array of strings 'senior' or 'open' depending on conditions that the argument meets
*/

function openOrSenior(data){
  //iterate through list of data - for...of loop
  let categoryOfMemberArr = []
  for (member of data) {
    //[0] > 54 && [1] > 7 ? categoryArr.push('Senior') : .push('Open)
    if(member[0] > 54 && member[1] > 7 ) {
      categoryOfMemberArr.push('Senior')
    }
    else {
      categoryOfMemberArr.push('Open')
    }
  }
  return categoryOfMemberArr

}
let list = [[45, 12],[55,21],[19, -2],[104, 20]]
//console.log(openOrSenior(list))













/*
8 - Filter out the geese
geese are any string given in the pre-populated array
write a function that takes a list of strings as an arguments
and returns a filtered list containing the same elements with any geese removed
p - array of strings only
r - array filtered from argument array removing any elements matching from the pre-populated array
e - so any geese within pre-populated array should be removed from the argument array
*/
function gooseFilter (birds) {
  //pre-populated array given
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  //filter array method
  //condition of filter if any geese element within the geese array is within the argument array, remove
  return birds.filter(bird => !geese.includes(bird))
};
let birds = ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
//console.log(gooseFilter(birds))







/*
7 - Is this a triangle?
*/
//function accepts 3 integer values
//return true if a triangle can be built with sides of those lengths
function isTriangle(a,b,c) {
  //any two sides of a triangle is larger than a third side
  if (a+b > c && a+c > b && c+b > a) {
    return true
  }
  return false
}
//true
//console.log(isTriangle(1,2,2))


//false
//console.log(isTriangle(7,2,2))












/*
8 - Reversed Strings
*/
//return the argument passed in, in reverse order
function reversedString(str) {
  let strArr = Array.from(str)
  console.log(strArr)
  let reversed = []
  for (let i = strArr.length-1; i >= 0; i--) {
    reversed.push(strArr[i])
  }
  return reversed.join('')

}
//console.log(reversedString('world'))













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
  narcNum = narcNum.reduce((iter, val) => Math.pow(Number(val),number.length)+Number(iter),0)
  //reduce method on the array of elements Number(string)
  //return bool value with if statement
  if (number == narcNum) {
    return true
  }
  return false
}
//console.log(narcissistic(153));




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