var possession = 'hammer'

var hammerVerse =   "I'd hammer in the morning, I'd hammer in the evening, All over this land, I'd hammer out danger, I'd hammer out a warning, I'd hammer out love between my brothers and my sisters, ah-ah all over this land."
var bellVerse = "I'd ring it in the morning, I'd ring it in the evening, All over this land, I'd ring out danger, I'd ring out a warning, I'd ring out love between my brothers and my sisters, ah-ah all over this land."
var songVerse = "I'd sing it in the morning, I'd sing it in the evening, All over this world, I'd sing out danger, I'd sing out a warning, I'd sing out love between my brothers and my sisters ah-ah all over this land"

// Camel Case
// variable names start with a lowercase letter and every word thereafter starts with an uppercase

if(possession == "hammer") {
    console.log(hammerVerse)
} else if (possession == "bell") {
    console.log(bellVerse)
} else if (possession == "song") {
    console.log(songVerse)
} else {
    console.log("I'm so poor.")
}