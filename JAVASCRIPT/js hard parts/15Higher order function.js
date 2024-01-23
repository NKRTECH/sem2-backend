// function x() {
//     console.log('nayan')
// }

// function y(x) {
//     x()
// }

// const radius = [3, 1, 2, 4]

// const calculateArea = function (radius) {
//     const output = [];
//     for (let i = 0; i < radius.length; i++) {
//         output.push(Math.PI * radius[i] * radius[i])
//     }
//     return output;
// };

// console.log(calculateArea(radius)); // [3, 1, 8, 16]

// const calculateCircumference = function (radius) {
//     const output = [];
//     for (let i = 0; i < radius.length; i++) {
//         output.push(2 *  Math.PI * radius[i]);
//     }
//     return output;
// };
// console.log(calculateCircumference(radius)); 

// const calculateDiameter = function (radius) {
//     const output = [];
//     for (let i = 0; i < radius.length; i++) {
//         output.push(2 * radius[i]);
//     }
//     return output;
// };
// console.log(calculateDiameter(radius)); 

//***********optimized code ***************
const radius = [3, 1, 2, 4]

//function calculate(radius, logic) { ***==we can also write like this.
const calculate = function (radius, logic) {  
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(logic(radius[i]))
    }
    return output;
}

const area = function(radius){
    return Math.PI * radius * radius;
};
const circumference = function(radius){
    return 2 * Math.PI * radius;
}
const diameter = function(radius){
    return 2 * radius;
}
console.log(calculate(radius, area))
console.log(calculate(radius, circumference))
console.log(calculate(radius, diameter))