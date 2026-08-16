function dropElements(arr, func) {
  // 尋找第一個讓 func(element) 傳回 true 的元素索引值
  const index = arr.findIndex(func);

  // 若找不到滿足條件的元素（findIndex 傳回 -1），則傳回空陣列；否則切片傳回剩餘元素
  return index === -1 ? [] : arr.slice(index);
}

// 測試：
console.log(dropElements([1, 2, 3, 4], function (n) { return n >= 3; })); // [3, 4]
console.log(dropElements([0, 1, 0, 1], function (n) { return n === 1; })); // [1, 0, 1]
console.log(dropElements([1, 2, 3], function (n) { return n > 0; }));      // [1, 2, 3]
console.log(dropElements([1, 2, 3, 4], function (n) { return n > 5; }));   // []
console.log(dropElements([1, 2, 3, 7, 4], function (n) { return n > 3; })); // [7, 4]
console.log(dropElements([1, 2, 3, 9, 2], function (n) { return n > 2; })); // [3, 9, 2]
