/* **********************************......While......loop.....*********************** */

var n = 0;

while (n < 5) {          //******here it will check if n is less than 5 at the beginning******** */
  n++;                    
  console.log("n = " + n);
}

var n = 5;

while (n < 5) {          //******...here it not run the code bcoz n is not less than 5....******** */
  n++;                    
  console.log("n = " + n);
}

var n = 0;

while (n < 5) {   
  n++;
  
  if (n == 3) break;    // code will not run after n reaches the value 3******
  console.log("n = " + n);
}
//**************************...do while loop.....****************************** */
// in do while loop the limiting condition is checked after executing the code
var i = 0;

do {
  i++;
  console.log("i0 = " + i);
} while (i < 5); //**********....here it will check if i is less than 5 after executing the code upto 5  ,,,it will reach 5.....********* */

// &turn_off_js=true
var i = 5;

do {
  i++;
  console.log("i2 = " + i);  // it will execute code one time which is 6 bcuz stopping value is after the code execution
} while (i < 5);

