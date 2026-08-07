function bouncer(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    // 將值轉成布林值，只有真值才保留
    if (arr[i]) {
      result.push(arr[i]);
    }
  }

  return result;
}

// 測試：
console.log(bouncer([7, "ate", "", false, 9]));               // [7, "ate", 9]
console.log(bouncer(["a", "b", "c"]));                        // ["a", "b", "c"]
console.log(bouncer([false, null, 0, NaN, undefined, ""]));   // []
console.log(bouncer([null, NaN, 1, 2, undefined]));           // [1, 2]
console.log(bouncer([]));                                     // []

// 驗證輸入陣列未被修改：
const input = [7, "ate", "", false, 9];
bouncer(input);
console.log(input); // [7, "ate", "", false, 9]（不變）
