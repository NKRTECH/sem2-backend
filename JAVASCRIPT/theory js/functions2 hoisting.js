// JS Nuggets
// Hoisting

// console.log(notDeclared); // Uncaught ReferenceError: notDeclared is not defined

console.log(definedLater);
var definedLater;  // here this is declared and this variable has been hoisted up and the computer knows it exixts.
definedLater = 'I am defined!' // but it is defined later and it dont get hoisted to the top thats why above output will give you 'undefined'
console.log(definedLater) // after defining it will give output


console.log(definedSimulateneously); // again it will give undefined output but computer knows variable exists. 
var definedSimulateneously = 'I am defined!'
console.log(definedSimulateneously)


doSomethingElse(); // here the function is called even though it is defined later it gets hoisted to top*****
function doSomethingElse(){
  console.log('I did it!');  //functions are hoisted to the top even if they are defined later**********
}


functionVar(); // Uncaught TypeError: functionVar is not a function
var functionVar = function(){ // here the declaration will get hoisted to top
// but it defined later after the function called it will show error
  console.log('I did it!');
}
