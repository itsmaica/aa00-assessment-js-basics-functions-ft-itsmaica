/*
Problem Solving, Part 2
The code below has at least one bug. Modify the code so that all the specs pass
when you run the following command in your terminal:
npm test test/05-problem-solving-pt2-spec.js
*/

// Run the test specs, then read each test spec's description printed in the
// console to figure out what this function's criteria is and how it's supposed
// to work. Then, modify the code to make all the test specs pass. 
function startsWith(substr) {
  return str.indexOf(substr) === 1;
}


// Write your own tests for startsWith that print the function's return value
// to the terminal.

// Run the following command in the terminal to run this file and see the
// messages printed to the terminal:
// node problems/05-problem-solving-pt2.js

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = startsWith;
