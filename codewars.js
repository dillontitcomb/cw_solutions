// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
// It should remove all values from list a, which are present in list b.
// array_diff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:
// array_diff([1,2,2,2,3],[2]) == [1,3]

// const arrayOne = [1, 3, 3, 4, 5, 7];
// const arrayTwo = [1, 2, 2, 4, 6, 7];

// const desiredAnswer = [3, 3, 5];

function array_diff(arrA, arrB) {
  arrB.forEach(digit => {
    for (let i = 0; i < arrA.length; i++) {
      if (digit === arrA[i]) {
        arrA.splice(i, 1);
        i--;
      }
    }
  });
  return arrA;
}

// console.log(array_diff(arrayOne, arrayTwo));

//https://www.codewars.com/kata/bocce/train/javascript

// example score:

// const data = [
//   { type: 'black', distance: [60, 1] },
//   { type: 'black', distance: [61, 3] },
//   { type: 'red', distance: [61, 3] },
//   { type: 'red', distance: [65, -1] },
//   { type: 'jack', distance: [60, 2] }
// ];

// const data2 = [
//   { type: 'black', distance: [70, -1] },
//   { type: 'red', distance: [85, -1] },
//   { type: 'jack', distance: [80, -5] }
// ];

// Didn't understand prompt - built for game where best balls cancel eachother out
function getBocceScore(score) {
  const target = score[score.length - 1].distance;
  const ball1 = [62, 5];
  const blackBalls = [];
  const redBalls = [];
  function getDistanceFromTarget(goal, ball) {
    return Math.abs(goal[0] - ball[0]) + Math.abs(goal[1] - ball[1]);
  }
  score.forEach(ball => {
    if (ball.type === 'black') {
      blackBalls.push(getDistanceFromTarget(ball.distance, target));
    }
    if (ball.type === 'red') {
      redBalls.push(getDistanceFromTarget(ball.distance, target));
    }
  });
  blackBalls.sort(function(a, b) {
    return a - b;
  });
  redBalls.sort(function(a, b) {
    return a - b;
  });
  let blackWinCounter = 0;
  for (let i = 0; i < blackBalls.length; i++) {
    if (blackBalls[i] === redBalls[i]) {
      //do nothing
    } else if (blackBalls[i] < redBalls[i]) {
      blackWinCounter++;
    } else if (blackBalls[i] > redBalls[i]) {
      blackWinCounter--;
    }
  }
  console.log(blackBalls);
  console.log(redBalls);
  console.log(blackWinCounter);
  if (blackWinCounter > 0) {
    return `black scores ${blackWinCounter}`;
  } else if (blackWinCounter < 0) {
    return `red scores ${Math.abs(blackWinCounter)}`;
  } else {
    return 'No points scored';
  }
}

// console.log(getBocceScore(data2));

// Make change from <100 cents amount
// https://www.codewars.com/kata/making-change/train/javascript

const makeChange = amount => {
  const types = [
    { type: 'H', value: 50 },
    { type: 'Q', value: 25 },
    { type: 'D', value: 10 },
    { type: 'N', value: 5 },
    { type: 'P', value: 1 }
  ];
  const output = {};
  const getCoins = coinType => {
    return Math.floor(amount / coinType);
  };
  types.forEach(coin => {
    let numOfCoin = getCoins(coin.value);
    if (numOfCoin > 0) {
      output[coin.type] = numOfCoin;
      amount -= coin.value * numOfCoin;
    }
  });
  return output;
};

// console.log(makeChange(0));

// find which array elements of array1 are in array2
// https://www.codewars.com/kata/which-are-in/train/javascript

// const a1 = ['live', 'strong', 'arp'];
// const a2 = ['lively', 'alive', 'harp', 'sharp', 'armstrong'];

function inArray(array1, array2) {
  const output = [];
  let alreadyAdded = '';
  array1.forEach(chunk => {
    array2.forEach(str => {
      if (str.includes(chunk) && !alreadyAdded.includes(chunk)) {
        output.push(chunk);
        alreadyAdded += chunk;
      }
    });
  });
  output.sort();
  return output;
}

// console.log(inArray(a1, a2));

// Reverse every other word in string
// https://www.codewars.com/kata/reverse-every-other-word-in-the-string/train/javascript

// const stringToReverse = "I really don't like reversing strings!";

function reverse(str) {
  return str
    .split(' ')
    .map((word, i) => {
      if (i % 2 !== 0) {
        word = word
          .split('')
          .reverse()
          .join('');
      }
      return word;
    })
    .join(' ');
}

// console.log(reverse(stringToReverse));

// https://www.codewars.com/kata/help-mrs-jefferson/train/javascript
// Help Ms Jefferson: arrange students of any number into fewest groups of consecutive sizes (e.g. 65 = [33,32])

function shortestArrang(n) {
  if (!(n % 2 === 0)) return [Math.floor(n / 2) + 1, Math.floor(n / 2)];
  const possibleNums = [];
  for (let i = 0; i <= Math.floor(n / 2); i++) {
    possibleNums.push(i);
  }
  console.log(possibleNums);
  for (let i = 0; i < possibleNums.length; i++) {
    if (possibleNums[i] + possibleNums[i + 1] + possibleNums[i + 2] === n) {
      return [possibleNums[i + 2], possibleNums[i + 1], possibleNums[i]];
    }
  }
  for (let i = 0; i < possibleNums.length; i++) {
    if (
      possibleNums[i] +
        possibleNums[i + 1] +
        possibleNums[i + 2] +
        possibleNums[i + 3] ===
      n
    ) {
      return [
        possibleNums[i + 3],
        possibleNums[i + 2],
        possibleNums[i + 1],
        possibleNums[i]
      ];
    }
  }
  for (let i = 0; i < possibleNums.length; i++) {
    if (
      possibleNums[i] +
        possibleNums[i + 1] +
        possibleNums[i + 2] +
        possibleNums[i + 3] +
        possibleNums[i + 4] ===
      n
    ) {
      return [
        possibleNums[i + 4],
        possibleNums[i + 3],
        possibleNums[i + 2],
        possibleNums[i + 1],
        possibleNums[i]
      ];
    }
  }
  for (let i = 0; i < possibleNums.length; i++) {
    if (
      possibleNums[i] +
        possibleNums[i + 1] +
        possibleNums[i + 2] +
        possibleNums[i + 3] +
        possibleNums[i + 4] +
        possibleNums[i + 5] ===
      n
    ) {
      return [
        possibleNums[i + 5],
        possibleNums[i + 4],
        possibleNums[i + 3],
        possibleNums[i + 2],
        possibleNums[i + 1],
        possibleNums[i]
      ];
    }
  }
  for (let i = 0; i < possibleNums.length; i++) {
    if (
      possibleNums[i] +
        possibleNums[i + 1] +
        possibleNums[i + 2] +
        possibleNums[i + 3] +
        possibleNums[i + 4] +
        possibleNums[i + 5] +
        possibleNums[i + 6] ===
      n
    ) {
      return [
        possibleNums[i + 6],
        possibleNums[i + 5],
        possibleNums[i + 4],
        possibleNums[i + 3],
        possibleNums[i + 2],
        possibleNums[i + 1],
        possibleNums[i]
      ];
    }
  }
  for (let i = 0; i < possibleNums.length; i++) {
    if (
      possibleNums[i] +
        possibleNums[i + 1] +
        possibleNums[i + 2] +
        possibleNums[i + 3] +
        possibleNums[i + 4] +
        possibleNums[i + 5] +
        possibleNums[i + 6] +
        possibleNums[i + 7] ===
      n
    ) {
      return [
        possibleNums[i + 7],
        possibleNums[i + 6],
        possibleNums[i + 5],
        possibleNums[i + 4],
        possibleNums[i + 3],
        possibleNums[i + 2],
        possibleNums[i + 1],
        possibleNums[i]
      ];
    }
  }
  return [-1];
}

// console.log(shortestArrang(52));

// https://www.codewars.com/kata/next-bigger-number-with-the-same-digits/train/javascript
// Make any number the next largest it can possibly be by rearranging digits
// Mostly complete, need to flatten array.

function nextBigger(n) {
  const numArray = n
    .toString()
    .split('')
    .map(x => parseInt(x));
  console.log(numArray);
  let growingNumber = [numArray[numArray.length - 1]];
  let shiftingNumber;
  for (let i = numArray.length - 1; i >= 0; i--) {
    console.log(growingNumber);
    if (biggerCheck(numArray[i - 1], growingNumber)) {
      growingNumber.unshift(numArray[i - 1]);
      shiftingNumber = numArray[i - 1];
      break;
    } else {
      growingNumber.unshift(numArray[i - 1]);
    }
  }
  shiftingNumber = growingNumber[1];
  growingNumber[1] = growingNumber[0];
  growingNumber.shift();
  let output = growingNumber.map(x => parseInt(x)).sort((a, b) => a - b);
  output.unshift(parseInt(shiftingNumber));
  numArray.splice(output.length, numArray.length - output.length, output);
  console.log(numArray);
  function biggerCheck(newNum, currentNums) {
    for (let i = 0; i < currentNums.length; i++) {
      if (currentNums[i] > newNum) return true;
    }
  }
}

// console.log(nextBigger(39897972));

// Return sum of all numbers below target num that are multiples of three or five

function divisibleBy(num, factor) {
  return num % factor === 0 ? true : false;
}

function sumOfMultiples(number) {
  const factorsArray = [];
  for (let i = 0; i < number; i++) {
    if (divisibleBy(i, 3) || divisibleBy(i, 5)) factorsArray.push(i);
  }
  if (factorsArray.length > 0) {
    return factorsArray.reduce((acc, curr) => acc + curr);
  } else {
    return 0;
  }
}

// console.log(sumOfMultiples(14));

// https://www.codewars.com/kata/reverse-or-rotate/train/javascript
// If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position.

let example = '12345698765412515623';
let sz = 6;

function revrot(str, size) {
  let arr = str.split('');
  let chunks = [];
  for (let i = 0; i < str.length; i += size) {
    let chunk = arr.splice(0, 6);
    chunks.push(chunk);
  }
  let newChunks = [];
  chunks.forEach(chunk => {
    let sums = chunk
      .map(x => Math.pow(parseInt(x), 3))
      .reduce((prev, curr) => prev + curr);
    newChunks.push(sums);
  });
  let output = [];
  for (let j = 0; j < newChunks.length; j++) {
    if (newChunks[j] % 2 === 0) {
      output.push(chunks[j].reverse().join(''));
    } else {
      // rotate
    }
  }
  return output;
}

console.log(revrot(example, sz));
