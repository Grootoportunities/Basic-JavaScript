function rangeOfNumbers(startNum, endNum) {
  if (endNum < startNum) return [];
  else {
    const myArray = rangeOfNumbers(startNum, endNum - 1);

    myArray.push(endNum);

    return myArray;
  }
}
