// Iteration 1

function sum(numOne, numTwo) {

if (numOne > numTwo) {
    
    return numOne;
    } else {
    return numTwo;
    }
}

// Iteration 2

// Iteration 2

const avengers = [
    "Hulk",
    "Thor",
    "IronMan",
    "Captain A.",
    "Spiderman",
    "Captain M.",
  ];
  function findLongestWord(param) {
    let longestWord = param[0];
    for (let i = 1; i < param.length; i++) {
      if (param[i].length > longestWord.length) {
        longestWord = param[i];
      }
    }
    return console.log(longestWord);
  }
  findLongestWord(avengers);
 
 // Iteration 3

const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumArray(array) {
    
    let sum = 0;
    
    for (let i = 0; i < array.length; i++) {
    sum += array[i];
    }

    return console.log(sum);
}

sumArray(numbers);
    