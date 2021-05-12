/* 
*  Evens and Odds
*  Create a function that accepts an array. Every time that array has three odd values in a
*  row, print "That’s odd!" Every time the array has three evens in a row, print "Even more
*  so!"
*/

// 1.  Create a function that accepts an array named evensAndOdds(arr)
// 2.  Create a variable oddCount that counts consecutive odds and start it at 0
// 3.  Create a variable evenCount that counts consecutive evens and start it at 0
// 4.  Create a for loop that starts var i at 0, ends at the end of arr, and increments by 1
// 5.  If I see an odd number, increment oddCount and reset evenCount to 0
// 6.  Is oddCount equal to 3? if so, log "That's Odd" to the console and reset oddCount to 0.
// 7.  If I see an even number, increment evenCount and reset oddCount to 0
// 8.  Is evenCount equal to 3? if so, log "Even more so!" to the console and reset evenCount to 0.

function evensAndOdds(arr){
  var oddCount = 0
  var evenCount = 0
  for(var i =0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      oddCount++
      evenCount = 0
      if (oddCount == 3) {
        console.log("That's odd!")
        oddCount = 0
      }
    } else {
      evenCount++
      oddCount = 0
      if (evenCount == 3) {
        console.log("Even more so!")
        evenCount = 0
      }
    }
  }
}

evensAndOdds([1, 3, 5, 2, 1, 6, 8, 2, 4, 6, 2, 8, 3, 9, 9, 9, 1, 1, 1, 2, 4])

// PSEUDOCODE PRACTICE
// Multiples of Three – but Not All
// Write a function that uses a for loop to print multiples of 3 from -300 to 0. Skip -3 and -6.

// 4 requirements for a for loop:
//   1 - a sentry
//   2 - where will sentry start
//   3 - where will sentry end
//   4 - how will sentry change

// 1.  Create a function named multOfThree()
// 2.  Create a for loop that starts var i at -300 and ends at 0 and increments by 3
// 3.  Inside the for loop, print out i except when i is -3 or -6

function multOfThree() {
  for (var i = -300; i <= 0; i += 3) {
    if(i != -6 && i != -3) {
      console.log(i)
    }
  }
}

multOfThree()