function repeatStringNumTimes(str, num) {
  // 當數字小於或等於零時，回傳空字串
  if (num <= 0) {
    return "";
  }

  // 宣告累積結果的變數
  let accumulatedString = "";

  // 使用迴圈重複累加字串 num 次
  for (let i = 0; i < num; i++) {
    accumulatedString += str;
  }

  return accumulatedString;
}

// 測試：
console.log(repeatStringNumTimes("*", 3));    // "***"
console.log(repeatStringNumTimes("abc", 3));  // "abcabcabc"
console.log(repeatStringNumTimes("abc", 1));  // "abc"
console.log(repeatStringNumTimes("*", 8));    // "********"
console.log(repeatStringNumTimes("abc", -2)); // ""
