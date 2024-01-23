// challenge 1: Convert the following function into a pure function.
// Also, write a reason, as why do you think, the following function is impure and
// how your solution made that impure function to a pure function.

const listOfOddNumbers = [1, 3, 5, 7];
console.log(listOfOddNumbers)

function addOddNumber(newNumber) {
  listOfOddNumbers.push(newNumber);
  return listOfOddNumbers;          //this is impure bcoz it is changing global variable
}

const oddNumber = addOddNumber(9); //after calling the fn addOddNumber it have altered the global variable
console.log(oddNumber);
console.log(listOfOddNumbers)  //here the global array has been changed

// you can check the console, for the ouput of your code.
function addOddNum(arr,newNum) {
  
  return [...arr,newNum]  //it will not change the global array, but here it is already changed before..
}
const addn = addOddNum(listOfOddNumbers,17)
console.log(addn)    //it will not change the original(already changed) array [1, 3, 5, 7, 9]

const addn1 = addOddNum(listOfOddNumbers,155)
console.log(addn1)
console.log(listOfOddNumbers) //output [1, 3, 5, 7, 9] no change