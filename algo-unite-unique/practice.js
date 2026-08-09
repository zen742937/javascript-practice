function uniteUnique(...arrs) {
  const result = [];

  for (let i = 0; i < arrs.length; i++) {
    for (let j = 0; j < arrs[i].length; j++) {
      const value = arrs[i][j];
      // 只有在結果陣列中還沒出現過時才加入
      if (!result.includes(value)) {
        result.push(value);
      }
    }
  }

  return result;
}

// 測試：
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));            // [1, 3, 2, 5, 4]
console.log(uniteUnique([1, 2, 3], [5, 2, 1]));                       // [1, 2, 3, 5]
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])); // [1, 2, 3, 5, 4, 6, 7, 8]
console.log(uniteUnique([1, 3, 2], [5, 4], [5, 6]));                  // [1, 3, 2, 5, 4, 6]
console.log(uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]));         // [1, 3, 2, 5, 4]
