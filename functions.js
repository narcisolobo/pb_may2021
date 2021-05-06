// THis is the beginning of my super sweet program

// var sum = 0;
// var divByI = 0;

// function countToFifty(){
//     //code block
//     for(var i = 0; i<=50; i++){
//         sum += i; // sum = sum + i
//         console.log("Currently i is: " + i + ", and the sum is: " + sum);
//         divByI = sum / i;
//         console.log("The sum divided by i = " + divByI);
//     }
// }

// countToFifty()


// console.log("hi how are you")

// countToFifty()



 //               //  parameters
// function addNumbers(num1, num2, myStr){
//     console.log(typeof(myStr))
//     if(typeof(myStr) != "string"){
//         console.log("you do not know the way... enter a string")
//         return null
//         // more logic 
//     }
//     // console.log(num1, num2)
//     // console.log(4+5)
//     sum = num1 + num2;
//     console.log("The Sum of " +num1 + " and " + num2 + " is " + sum +"!!")
// }
// //       arguments
// addNumbers("Hello", "world", "im a string")








//                 parameters are here 
// function multiply(      num1, num2     ){
//     console.log(num1*num2)
//     return num1*num2
//     // 
// }

// var mult = multiply(5,10)
// console.log(mult)

// send mult to user screen



function responder(string){
    if(string == "hello"){
        return "How are you doing?"
    } else if( string == "goodbye"){
        return "ok byeeee"
    } else {
        return "what did you say"
    }

}

console.log(responder("hello"))
console.log(responder("goodbye"))
console.log(responder("asdfasdfasdfa"))


// Functions conventionally have a return
// functions become what they return!!