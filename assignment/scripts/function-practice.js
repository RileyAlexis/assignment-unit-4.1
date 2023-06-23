console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(firstname) {
  return `Hello, ${firstname}!`;
}
console.log(helloName("Your Name!"));
// Remember to call the function to test


// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  if (typeof(firstNumber)==='number' && typeof(secondNumber)==='number') return firstNumber + secondNumber;
  else return 'Not a number';
  // return firstNumber + secondNumber;
}
console.log('Added numbers = ', addNumbers(7,2));


// 4. Function to multiply three numbers & return the result
function multiplyThree(x,y,z) {
if (typeof(x)==='number' && typeof(y)==='number' && typeof(z)==='number') return x*y*z;
else return 'Cannot multiple non numbers';
}
console.log(multiplyThree(5,2,8));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  }
  else return false;
}
console.log('Check if Positive:', isPositive(5));

// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log('isPositive - should say true', isPositive(3));
console.log('isPositive - should say false', isPositive(0));
console.log('isPositive - should say false', isPositive(-3));


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast(array) {
  if(Array.isArray(array)) {
  if (array.length>0) return array[array.length-1];}
  else return 'Undefined';
}
console.log('Get last value', getLast([4,2,4,5,3,6,324,6,3,53]));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find(value, array) {
for (let i=0; i<array.length; i++)
{
if (array[i]===value) return true;
if (i+1===array.length) return false;
}
}
 
console.log(find(5, [3,2,2,5,2]));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
return string.startsWith(letter);
}
console.log('isFirstLetter - should say true', isFirstLetter('a', 'apple'));
console.log('isFirstLetter - should say false', isFirstLetter('z', 'apple'));

// 9. Function to return the sum of all numbers in an array
function sumAll(sumArr) {
  let sum = 0;
  // TODO: loop to add items
for (let i=0; i<sumArr.length; i++){
  sum += sumArr[i];
}
return sum;
}
  // TODO: return the sum

console.log('Sum of an array', sumAll([5,3,2,5,6,7,2]));
// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPositive(posArr) {
posArr = posArr.filter(num => num>0);
return posArr;
}
console.log('Remove negative numbers from array', allPositive([-5,-6,0,-2,4,4,1,2,-204,8,0]));

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

/* --From Codewars.com
Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
Example
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
The returned format must be correct in order to complete this challenge.
Don't forget the space after the closing parentheses!*/



function formatPhoneNum(phoneNum) {
  const returnArr = [];
  if (Array.isArray(phoneNum)===false) { return 'Not an Array';}
  if (phoneNum.length>10) {return 'Too many digits'};
  if (phoneNum.length<10) {return 'Must be 10 digits'};

  returnArr.push('(');
  returnArr.push(phoneNum.slice(0,3));
  returnArr.push(')');
  returnArr.push(phoneNum.slice(3,6));
  returnArr.push('-');
  returnArr.push(phoneNum.slice(6,10));
  return returnArr;
}
const phoneArr = [5,5,5,3,4,5,3,3,3,5];
console.log(formatPhoneNum(phoneArr.flat(2))); 




// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}