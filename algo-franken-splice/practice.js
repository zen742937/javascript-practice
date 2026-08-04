function frankenSplice(arr1, arr2, n) {
  // 先複製第二個陣列，避免修改原始陣列
  const result = arr2.slice();

  // 從索引 n 開始，插入第一個陣列的所有元素（不刪除任何元素）
  result.splice(n, 0, ...arr1);

  return result;
}

// 測試：
console.log(frankenSplice([1, 2, 3], [4, 5], 1));
// [4, 1, 2, 3, 5]
console.log(frankenSplice([1, 2], ["a", "b"], 1));
// ["a", 1, 2, "b"]
console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));
// ["head", "shoulders", "claw", "tentacle", "knees", "toes"]
console.log(frankenSplice([1, 2, 3, 4], [], 0));
// [1, 2, 3, 4]

// 驗證輸入陣列未被修改：
const a = [1, 2, 3];
const b = [4, 5];
frankenSplice(a, b, 1);
console.log(a); // [1, 2, 3]（不變）
console.log(b); // [4, 5]（不變）
