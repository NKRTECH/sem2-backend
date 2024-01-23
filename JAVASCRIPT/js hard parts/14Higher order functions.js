//In functional programming, higher-order functions are functions
// that take other functions as arguments or return them as outputs.
// This allows for the creation of more abstract and reusable code.

//One example of a higher-order function in JavaScript is the Array.prototype.map method.
// It takes a callback function as its argument and applies it to each element in the array,
// returning a new array with the results.
let numbers = [1, 2, 3, 4, 5];
let doubledNumbers = numbers.map(function(number) {
  return number * 2;
});
console.log(doubledNumbers); // [2, 4, 6, 8, 10]

//Another example of a higher-order function is the Array.prototype.filter method,
// it takes a callback function as its argument and applies it to each element of an array,
// returning a new array that contains the elements that pass the test.

let numberss = [1, 2, 3, 4, 5];
let evenNumbers = numberss.filter(function(number) {
  return number % 2 === 0;
});
console.log(evenNumbers); // [2, 4]

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];//*************************************************** */
function filterOdd(arr) {
  const filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
}
console.log(filterOdd(arr));

// Output:
// [ 1, 3, 5, 7, 9, 11 ]

//Now let's say we also want to make a function that filters out and returns all the even numbers.
function filterEven(arr) {
    const filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 == 0) {
        filteredArr.push(arr[i]);
      }
    }
    return filteredArr;
  }
  console.log(filterEven(arr));
  
  // Output:
  // [ 2, 4, 6, 8, 10 ]

 //Let's make the function which does all the common stuff we performed in the filterOdd and filterEven functions.
 function filterFunction(arr, callback) {
    const filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
      callback(arr[i]) ? filteredArr.push(arr[i]) : null;
    }
    return filteredArr; 
 }
 // Function containing logic for filtering out odd numbers

function isOdd(x) {
    return x % 2 != 0;
  }
  
  // Function containing logic for filtering out even numbers
  
  function isEven(x) {
    return x % 2 === 0;
  }
// For filtering out odd numbers

filterFunction(arr, isOdd)
// Output of console.log(filterFunction(arr, isOdd)):
// [ 1, 3, 5, 7, 9, 11 ]

// For filtering out even numbers

filterFunction(arr, isEven)
// Output of console.log(filterFunction(arr, isEven)):
// [ 2, 4, 6, 8, 10 ]
//You can also create your own higher-order functions in javascript
function callFunction(fn, x) {
    return fn(x);
  }
  
  let square = function(x) { return x*x; }
  console.log(callFunction(square,5)); // 25


