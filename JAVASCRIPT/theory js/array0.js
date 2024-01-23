/* Array Basics */

var sandwich = ["peanut butter", "jelly", "bread"];

//******this is we called nested array**** */
var teams = [["Bulls", 23], ["White Sox", 45]];

console.log(sandwich[1]);   ///*****here we are printing element 1 in sandwich array*******/

sandwich[1] = "bananas";  //****it will replace jelly with banana********** */
console.log(sandwich);

console.log(teams[1][0]);   // *****here the first index is showing we are selecting 
//***** 1st element of array teams and
//******* */ second index is showing we are selecting 0th element of that 1st element*** 
teams[1][0] = "red socks"; //***here it is replacing white sox with red socks*****/
console.log(teams);

sandwich.forEach(function(element) {  // here this will print each element of sandwich array****
    console.log(element);
});