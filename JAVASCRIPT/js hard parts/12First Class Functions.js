//In JavaScript, functions are first-class citizens, which means 
//they can be treated like any other data type,
// such as a number or a string.This means that they can be assigned to variables,
// passed as arguments to other functions, and returned as values from functions.

//Here is an example of assigning a function to a variable:
let add = function(x, y) {
    return x + y;
  }
  console.log(add(1, 2)); // 3

//Another example of first-class functions is 
//passing a function as an argument to another function:

function callFunction(fn, x, y) {
    return fn(x, y);
  }
  
  console.log(callFunction(add, 3, 4)); // 7

//Returning a function from another function is also possible in javascript:
function generateMultiplier(factor) {
    return function(x) {
      return x * factor;
    }
  }
  
  let double = generateMultiplier(2);
  console.log(double(5)); // 10
//In this example, the generateMultiplier function takes a factor as an argument
// and returns a new function that multiplies its argument by that factor.
// This returned function is then assigned to the variable double.