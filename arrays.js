var string = "hello world" ;
var number = 100;
var isTired = true;

// All of these variables have a distinct limitation...
// most variables can only store one thing at a time...

var num1 = 10;
var num2 = 4;
var num3 = 7;
var num4 = 120;
var num5 = 50;

// how do you find the largest number?
var largest = num1;
if(num1<num2){
    largest = num2;
} else if(num1<num3){
    largest=num3
} else if (num1<num4){
    
}
// ^^^^ this is not the way!!!

// arrays are meant to hold COLLECTIONS of data
//  index   0   1  2   3
var arr1 = [10, 4, 7, 120];

// console.log(arr1[1])

// indexs   0    1    2         3      4     5      6         7
var arr2 = [26, 39, "hello", "world", true, 24, [1,2,3,4], "goodbye",23];
// innerArray = arr2[6]
// console.log(innerArray[1])
// console.log(arr2[6][1])

// .length is a built in method that tells us the length of an array
// console.log(arr2.length)

//if i want the last value in the array hou would i do that??
// console.log(arr2[arr2.length])

// to make this work.. we need length-1
// console.log(arr2[arr2.length-1])

// where does every array start? 0
// where doe every single array end? arr.length
for(var i = 0; i < arr2.length; i++ ){
    // console.log(arr2[i])
}
// [26, 39, "hello", "world", true, 24, [1,2,3,4], "goodbye",23];
// how do we find a specific value in the array

function doArrayStuff(arr){

    for(var i =0; i<arr.length; i++){
        if(arr[i] == "world"){
            console.log(i)
        }
        // how can we modify something only if its a number
        if(typeof(arr[i]) == "number"){
            arr[i] = arr[i]+10;
        }
    }
    console.log(arr)
}

// doArrayStuff(arr2)

//          0 1 2 3 4 5 6 7 8
var arr3 = [9,1,8,2,7,3,6,4,5]
// how do i work through this backward
for(var i = arr3.length-1; i >=0 ; i--){
    // console.log(arr3[i])
}

// how do i print out the odd indicies
for(var i = 1; i < arr3.length ; i+=2){
    // console.log(arr3[i])
}

//how do i print the odd numbers in the array
for(var i = 0; i < arr3.length ; i++){
    // console.log(arr3[i]%2)
    if(arr3[i] % 2 != 0){
        console.log(arr3[i])
    }
}

var arr4 = [4,3,2,1];

arr4[0] = "nine";

console.log(arr4)

// how do we add a value to an array???
// .push(some value)
arr4.push("Jim")

console.log(arr4)

// how do we remove a value from an array??
// .pop()
var popped = arr4.pop()

console.log(arr4)
console.log(popped)