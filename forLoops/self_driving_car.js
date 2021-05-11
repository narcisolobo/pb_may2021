const { takePictureForStreet } = require("./googleCodeBase");
const { driveToStreet } = require("./googleCodeBase");

// The takePicture(streetNumber) and drive(streetNumber) functions 
// are already part of Google's code base.

// Google Internal Documentation from Waymo says:
// takePicture(streetNumber)
    // takes a picture, sends the file to google DB along with the street number
    // to be catalogued.
// driveToStreet(streetNumber)
    // navigates to the street with the given number.


for(var streetNum = 10; streetNum <= endNum; streetNum++) {
    driveToStreet(streetNum);
    takePictureForStreet(streetNum)
}





