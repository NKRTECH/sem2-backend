/* Spread Operator / Rest Operator */

// add the elements of an existing array into a new array
var certsToAdd = ['Algorithms and Data Structures', 'Front End Libraries']; 
var certifications = ['Responsive Web Design', ...certsToAdd, 'Data Visualization', 'APIs and Microservices', 'Quality Assurance and Information Security'];
console.log(certifications);

var certifications = ['Responsive Web Design',certsToAdd, 'Data Visualization', 'APIs and Microservices', 'Quality Assurance and Information Security'];
console.log(certifications); //here it will add array within an array

// pass elements of an array as arguments to a function
function addThreeNumbers(x, y, z) { 
	console.log(x+y+z)
}
var args = [0, 1, 2, 3];
addThreeNumbers(...args);

// copy arrays
var arr = [1, 2, 3];
var arr2 = [...arr]; // like arr.slice()
arr2.push(4); 
console.log(arr);
console.log(arr2);


// concatenate arrays
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
//arr1.concat(arr2);
arr1 = [...arr1, "freeCodeCamp", ...arr2];
console.log(arr1);


// REST: condense multiple elements into an array
function multiply(multiplier, ...theArgs) {   //here ...theArgs acts like rest operator as an array
  return theArgs.map(function(element) {
    return multiplier * element;
  });
}

var arr = multiply(2, 1, 2, 3); // here multiplier is 2 and theArgs=[1,2,3]
console.log(arr)