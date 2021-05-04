// T-Diagrams
// A developer's tool to track how values change due to code.

var month = 12;
var season;
var hour = 10;
var timeOfDay;

var greeting = ''

// FOLLOWING CODE IS NOT 'DRY'
// DON'T REPEAT YOURSELF

if (month <= 2 || month == 12) {
    season = 'Winter'
    if (hour <= 12) {
        timeOfDay = "morning"
    } else if (hour > 12 && hour <= 17) {
        timeOfDay = "afternoon"
    } else if (hour > 17 && hour <= 24) {
        timeOfDay = "evening"
    } else {
        console.log('Invalid hour.')
    }
} else if (month > 2 && month <= 5) {
    season = 'Spring'
    if (hour <= 12) {
        timeOfDay = "morning"
    } else if (hour > 12 && hour <= 17) {
        timeOfDay = "afternoon"
    } else if (hour > 17 && hour <= 24) {
        timeOfDay = "evening"
    } else {
        console.log('Invalid hour.')
    }
} else if (month > 5 && month <= 8) {
    season = 'Summer'
    if (hour <= 12) {
        timeOfDay = "morning"
    } else if (hour > 12 && hour <= 17) {
        timeOfDay = "afternoon"
    } else if (hour > 17 && hour <= 24) {
        timeOfDay = "evening"
    } else {
        console.log('Invalid hour.')
    }
} else if (month > 8 && month <= 11) {
    season = 'Fall'
    if (hour <= 12) {
        timeOfDay = "morning"
    } else if (hour > 12 && hour <= 17) {
        timeOfDay = "afternoon"
    } else if (hour > 17 && hour <= 24) {
        timeOfDay = "evening"
    } else {
        console.log('Invalid hour.')
    }
} else {
    console.log('Invalid month.')
}

greeting = "Good " + timeOfDay + ", lovely " + season + " we're having."

console.log(greeting)

// FOLLOWING CODE IS 'DRY'
// WE'RE NOT REPEATING OURSELVES

if (month <= 2 || month == 12) {
    season = 'Winter'
} else if (month > 2 && month <= 5) {
    season = 'Spring'
} else if (month > 5 && month <= 8) {
    season = 'Summer'
} else if (month > 8 && month <= 11) {
    season = 'Fall'
} else {
    console.log('Invalid month.')
}

if (hour <= 12) {
    timeOfDay = "morning"
} else if (hour > 12 && hour <= 17) {
    timeOfDay = "afternoon"
} else if (hour > 17 && hour <= 24) {
    timeOfDay = "evening"
} else {
    console.log('Invalid hour.')
}

greeting = "Good " + timeOfDay + ", lovely " + season + " we're having."

console.log(greeting)

//  ==, <, <=, >, >=, !=
// && ||