function sumAll(arr) {
  // 找出陣列中的最小值與最大值
  const min = Math.min(arr[0], arr[1]);
  const max = Math.max(arr[0], arr[1]);

  let sum = 0;

  // 累加最小值到最大值之間的所有數字（包含兩端）
  for (let i = min; i <= max; i++) {
    sum += i;
  }

  return sum;
}

// 測試：
console.log(sumAll([1, 4]));  // 10
console.log(sumAll([4, 1]));  // 10（最小值不一定先出現）
console.log(sumAll([5, 10])); // 45
console.log(sumAll([10, 5])); // 45
