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

console.log(array_diff(arrayOne, arrayTwo));
