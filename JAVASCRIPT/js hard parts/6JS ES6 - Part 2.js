// default parameters
function greet(name = "stranger", greeting = "Hello") {
    console.log(greeting + ", " + name + "!");
  }
  
  greet(); // "Hello, stranger!"
  greet("John"); // "Hello, John!"
  greet("Mary", "Hi"); // "Hi, Mary!"

  function greet(name = "stranger", greeting = `Hello ${name}`) {
    console.log(greeting + ", " + name + "!");
  }
  
  greet("Mary"); 
  // "Hello Mary, Mary!"

//Spread & Rest Operator
//************The Spread operator (...) allows you to spread the elements of an array or an object into a new one.**********
// For example, you can use the spread operator to combine multiple arrays into one.

let numbers = [1, 2, 3, 4, 5];
let moreNumbers = [6, 7, 8];
let allNumbers = [...numbers, ...moreNumbers];
console.log(allNumbers); // [1, 2, 3, 4, 5, 6, 7, 8]

//You can also use the spread operator to convert an array-like object into an array.

let arrayLike = { 0: "a", 1: "b", length: 2 };
let array = [...arrayLike];
console.log(array); // ["a", "b"]

//*******The Rest operator (...) allows you to gather a certain number of elements into a new array.*******
// It's used to represent an indefinite number of arguments as an array.

function sum(...args) {
  return args.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // 15

//It can also be used in destructuring assignments

let [a, b, ...rest] = [1, 2, 3, 4, 5];
console.log(a); // 1
console.log(b); // 2
console.log(rest); // [3, 4, 5]