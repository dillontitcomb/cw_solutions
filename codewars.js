// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
// It should remove all values from list a, which are present in list b.
// array_diff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:
// array_diff([1,2,2,2,3],[2]) == [1,3]

const arrayOne = [1, 3, 3, 4, 5, 7];
const arrayTwo = [1, 2, 2, 4, 6, 7];

const desiredAnswer = [3, 3, 5];

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

const data = [
  { type: 'black', distance: [60, 1] },
  { type: 'black', distance: [61, 3] },
  { type: 'red', distance: [61, 3] },
  { type: 'red', distance: [65, -1] },
  { type: 'jack', distance: [60, 2] }
];

const data2 = [
  { type: 'black', distance: [70, -1] },
  { type: 'red', distance: [85, -1] },
  { type: 'jack', distance: [80, -5] }
];

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
