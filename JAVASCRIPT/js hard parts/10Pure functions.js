// *********pure function*******
//In functional programming, a pure function is a function that, given the same input, will always return the same output and has no side effects
// (i.e., it does not modify any external state). 
//Pure functions are easy to reason about, test, and debug as their behavior is predictable.
function add(x, y) {
    return x + y;
  }
  
  console.log(add(1, 2)); // 3


//******non pure function******* */
//A function that is not pure depends on an external state or has side effects, 
//such as modifying a global variable or changing the state of an object.
  let counter = 0;
function incrementCounter() {
  counter++;
}

incrementCounter();
console.log(counter); // 1
incrementCounter();
console.log(counter); // 2
//In this example, the function incrementCounter is not pure because it modifies an external state which is counter,
// and the output of the function is not always the same for the same input;
// for example, if we call this function multiple times, the output will change.