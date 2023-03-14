function maxIndex(arr) {
    if (arr.length === 0) {
      return -1;
    }
    let maxIndex = arr[0];
    let index = 0;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > maxIndex) {
        maxIndex = arr[i];
        index = i;
      }
    }
    return index;
  }
  console.log(maxIndex([1, 3, 2])) // => index 1
  console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // => index 0
  console.log(maxIndex([])) // => -1