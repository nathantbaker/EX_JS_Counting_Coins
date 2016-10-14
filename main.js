
// Write a program that will convert a dollar amount to the number of coins that make up the amount. Use the common American coins of quarters, dimes, nickels, and pennies.

  // Input: 0.67
  // Output:
  // {
  //   quarters: 2,
  //   dimes: 1,
  //   nickels: 1,
  //   pennies: 2
  // }

// Set the values of coins
  var quarterValue = .25;
  var dimeValue = .1;
  var nickelValue = .05;
  var pennyValue = .01;

// Test inputs
var input = .80;
console.log("Input:", input);

// Function to round numbers to two decimals
function roundToTwo(num) {    
  return +(Math.round(num + "e+2") + "e-2");
}

function coinCounter (amount) {

  // Track amount to convert to coins
  var unSorted = amount;  
  console.log("Unsorted:", unSorted);

   // Initialize a JavaScript object to hold the coins
  var coinPurse = {
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0
  };

  // Create Loop to pull out quarters
  while (unSorted >= quarterValue) {
    coinPurse.quarters += 1;
    unSorted -= quarterValue;
    unSorted = roundToTwo(unSorted);
    console.log("Purse:", coinPurse);
    console.log("Unsorted:", unSorted);
  }

  // Create Loop to pull out dimes
  while (unSorted >= dimeValue) {
    coinPurse.dimes += 1;
    unSorted -= dimeValue;
    unSorted = roundToTwo(unSorted);
    console.log("Purse:", coinPurse);
    console.log("Unsorted:", unSorted);
  }

  // Create Loop to pull out nickels
  while (unSorted >= nickelValue) {
    coinPurse.nickels += 1;
    unSorted -= nickelValue;
    unSorted = roundToTwo(unSorted);
    console.log("Purse:", coinPurse);
    console.log("Unsorted:", unSorted);
  }

  // Create Loop to pull out pennies
  while (unSorted >= pennyValue) {
    coinPurse.pennies += 1;
    unSorted -= pennyValue;
    unSorted = roundToTwo(unSorted);
    console.log("Purse:", coinPurse);
    console.log("Unsorted:", unSorted);
  }
 
  return coinPurse; 
}

var answer = coinCounter(input);
console.log("Answer:", answer);