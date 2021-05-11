
function takePictureForStreet(streetNumber) {
    console.log("Photo logged to database for street number: ", streetNumber);
    return streetNumber;
}

function driveToStreet(streetNumber) {
    console.log("Driving to street:", streetNumber);
}

module.exports = {takePictureForStreet, driveToStreet}