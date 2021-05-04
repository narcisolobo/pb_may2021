// This is not javascript code

// Variables and Datatypes in JavaScript:

// Primitive Datatypes:
// Strings - a sequence of characters

var myString = ''
var mySecondString = '       '
console.log(typeof mySecondString)

var myName = "Narciso"
var lastName = "Lobo"

// + sign is called a concatenator

var fullName = myName + " " + lastName

console.log(fullName)

// null and undefined
// null is a non-value on purpose

var favoriteColor = null
var isSunny;

console.log(favoriteColor)
favoriteColor = 'red'
console.log(favoriteColor)
favoriteColor = 120
console.log(favoriteColor)

// Numbers

var numHousePlants = 10
var fieldGoalPercentage = .4

// + - * / %

// Booleans
// Only two values - true or false

var isRaining = true

// zero is a 'falsy' value

var temp = 0

if(0) {
    console.log(true)
} else {
    console.log(false)
}

// Conditionals
// Conditionals start with the keyword "if"
// Parentheses after "if"
// Inside parentheses is our boolean statement, or conditional
// Curly braces that contain the code block

var month = 5

if (month == 5) {
    console.log("It's May.");
} else if (month == 6) {
    console.log("It's June.");
} else if (month == 7) {
    console.log("It's July.");
} else {
    console.log("It's not May or June.");
}

var isSunny = true


// In any one conditional chain, you may only have one if and only one else

// Create an IRL conditional chain
// We'll take a look at them at 1:00

var isFriday = true
var isNight = true

if (isFriday || isNight) {
    console.log("Watch Invincible in bed.")
}

// && both conditionals must be true
// || either conditional can be true