const sumFor = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

const sumWhile = (arr) => {
  let sum = 0;
  let i = 0;
  while (i < arr.length) {
    sum += arr[i];
    i++;
  }
  return sum;
};

const sumRecursion = (arr, maxIndex) => {
  // Starting point
  if (maxIndex < 0) {
    return 0;
  }
  // Everything else
  return arr[maxIndex] + sumRecursion(arr, maxIndex - 1);
};

const sumTheSimpleWay = (arr) => _.reduce(arr, (memo, element) => memo + element);

const testArray = [1, 2, 3, 4, 5];
console.log(sumFor(testArray));
console.log(sumWhile(testArray));
console.log(sumRecursion(testArray, (testArray.length - 1)));
console.log(sumTheSimpleWay(testArray));
