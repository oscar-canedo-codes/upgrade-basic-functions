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

// Iteration 4

const nums = [12, 21, 38, 5, 45, 37, 6];

function average(array) {

    let sum = 0;

    for (let i = 0; i < array.length; i++) {
    sum += array[i];
    }

return console.log(Math.round(sum / array.length));
}

average(nums);

// Iteration 5

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

function averageWord(param) {
  
   let sum = 0;
   for (let i = 0; i < param.length; i++) {
     if (typeof param[i] === "string") {
       sum += param[i].length;
     }
   }
   return console.log(sum/param.length); 
}
averageWord(mixedElements);

// Iteration 6

const duplicates = [
    "sushi",
    "pizza",
    "burger",
    "potatoe",
    "pasta",
    "ice-cream",
    "pizza",
    "chicken",
    "onion rings",
    "pasta",
    "soda",
  ];
  
  function removeDuplicates(param) {
    
    let unique = [];
    
    for (let i = 0; i < param.length; i++) {
      if (!unique.includes(param[i])) {
        unique.push(param[i]);
      }
    }
    return console.log(unique);
  }
  
  removeDuplicates(duplicates);