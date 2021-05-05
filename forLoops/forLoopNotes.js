console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);

// For Loops
// What part specifically is repeating? The console.log
// What part is changing - the value / number being printed
// What is the pattern that makes that change?

var num = 1;
var stopNum = 9;

// Conceptual -- conditional -- what question to ask?
if (num <= stopNum) {
    console.log(num);
    num = num + 1;
}

//   start      conditional
//              continue/stop?    increment or decrement
//      0              1            3
for (var i = 1;     i <= 10;   i = i + 1 ) {
    
    // 2
    console.log(i);

}

//   0   ==   0 ? 
10   %   2  == 0  // TRUE --> 2 goes into 10 however many times with 0 left over

//    1  ==  0 ? 
9    %   2  == 0  // FALSE --> 2 goes into 9 however many times with 1 left over

for (var i = 1;   i <= 10;   i = i + 1 ) {
    
    //  i % 2 != 0 ?   Is i mod 2 NOT equal to 0? // Is i odd?
    //  3 % 2 != 0 ?   2 goes into 3 with 1 left over ==> 1
    //    1   != 0 ?   True! - 1 is NOT equal to 0, so i, in this case 3 is odd.
    if (i % 2 != 0) {
        console.log(i);
    }

}
           //    12   FALSE  i -> 10 + 2 -- 12
for (var i = 1;   i <= 10;   i = i + 2) {
    console.log(i);
}


//   var    |    val
//  

//    console
//      2
//      4
//      6
//      8
//      10