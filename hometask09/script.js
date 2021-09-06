function sumOfNumsInOneDimArray(arr) {
  return arr.map((item, index) => {
    if (index === 0) {
      return arr[index + 1];
    }
    if (index === arr.length - 1) {
      return arr[arr.length - 2];
    }
    return arr[index - 1] + arr[index + 1];
  });
}

function sumOfNumsInTwoDimArray(arr) {
  if (arr.length === 1 && Array.isArray(arr[0])) {
    return [sumOfNumsInOneDimArray(arr[0])];
  }

  if (!arr[0][0]) {
    return sumOfNumsInOneDimArray(arr);
  }

  return arr.map((innerArray, innerArrayIndex) => {
    return innerArray.map((item, itemIndex) => {
      const arrLength = arr.length;
      const innerArrayLength = innerArray.length;

      if (
        innerArrayIndex !== 0 &&
        innerArrayIndex !== arrLength - 1 &&
        itemIndex !== 0 &&
        itemIndex !== innerArrayLength - 1
      ) {
        return (
          innerArray[itemIndex - 1] +
          innerArray[itemIndex + 1] +
          arr[innerArrayIndex - 1][itemIndex] +
          arr[innerArrayIndex + 1][itemIndex]
        );
      }

      if (innerArrayIndex === 0 && itemIndex === 0) {
        return innerArray[itemIndex + 1] + arr[innerArrayIndex + 1][itemIndex];
      }

      if (itemIndex === innerArrayLength - 1 && innerArrayIndex === 0) {
        return innerArray[itemIndex - 1] + arr[innerArrayIndex + 1][itemIndex];
      }

      if (innerArrayIndex === arrLength - 1 && itemIndex === 0) {
        return arr[innerArrayIndex - 1][itemIndex] + innerArray[itemIndex + 1];
      }

      if (
        innerArrayIndex === arrLength - 1 &&
        itemIndex === innerArrayLength - 1
      ) {
        return arr[innerArrayIndex - 1][itemIndex] + innerArray[itemIndex - 1];
      }

      if (
        itemIndex === 0 &&
        innerArrayIndex !== 0 &&
        innerArrayIndex !== arrLength - 1
      ) {
        return (
          innerArray[itemIndex + 1] +
          arr[innerArrayIndex - 1][itemIndex] +
          arr[innerArrayIndex + 1][itemIndex]
        );
      }

      if (
        itemIndex === innerArrayLength - 1 &&
        innerArrayIndex !== 0 &&
        innerArrayIndex !== arrLength - 1
      ) {
        return (
          innerArray[innerArrayLength - 2] +
          arr[innerArrayIndex - 1][innerArrayLength - 1] +
          arr[innerArrayIndex + 1][innerArrayLength - 1]
        );
      }

      if (
        innerArrayIndex === 0 &&
        itemIndex !== 0 &&
        itemIndex !== innerArrayLength - 1
      ) {
        return (
          innerArray[itemIndex - 1] +
          innerArray[itemIndex + 1] +
          arr[innerArrayIndex + 1][itemIndex]
        );
      }

      if (
        innerArrayIndex === arrLength - 1 &&
        itemIndex !== 0 &&
        itemIndex !== innerArrayLength - 1
      ) {
        return (
          innerArray[itemIndex - 1] +
          innerArray[itemIndex + 1] +
          arr[innerArrayIndex - 1][itemIndex]
        );
      }
    });
  });
}

const array1 = [1, 3, 3, 7];
const array2 = [
  [2, 2, 3, 4],
  [1, 3, 3, 7],
  [3, 2, 2, 6],
  [4, 2, 2, 1],
  [3, 1, 3, 5],
];
const array3 = [[1, 5, 5, 7]];

console.log(sumOfNumsInTwoDimArray(array1));
console.log(sumOfNumsInTwoDimArray(array2));
console.log(sumOfNumsInTwoDimArray(array3));
