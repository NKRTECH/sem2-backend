var num1;
var num2;
function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
  }
console.log(multiply(15, 10))

function square(number){
  return number * number;
}console.log(square(4));


var someVar = 'hat'  //it is a global variable*******
function myFun() {    //here the function has no parameter and arguement
  var someVar = 'nayan'; // it is a local variable , it will take precedence here**
  // this local variable will not be accessible outside the function****
  console.log(someVar)
}
myFun(); // here the function is called,,,, it has no parameter and arguement
console.log(someVar);  // here it will give output hat not nayan
/***************************************************** */
console.log(addSquares(4,5)) // here even though we define this func later
// but it can be called here***********

//**************nested function***************
function addSquares(a , b){  // outer function
  function square(x) {     // inner function
    return x*x;
  }
  return square(a) + square(b);  //****** here we are calling inner function*****
}
a = addSquares(2 , 3); // returns 13
b = addSquares(3 , 4); // returns 25
c = addSquares(4,5); // returns 41
console.log(c)