function largestOfAll(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    let max = arr[i][0]; // 先假設子陣列的第一個數字是最大值

    for (let j = 1; j < arr[i].length; j++) {
      if (arr[i][j] > max) {
        max = arr[i][j];
      }
    }

    result.push(max);
  }

  return result;
}

// 測試：
console.log(largestOfAll([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
// [5, 27, 39, 1001]
console.log(largestOfAll([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
// [27, 5, 39, 1001]
console.log(largestOfAll([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]));
// [9, 35, 97, 1000000]
console.log(largestOfAll([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));
// [25, 48, 21, -3]（全負數的子陣列最大值是 -3）
