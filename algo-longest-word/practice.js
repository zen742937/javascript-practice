// 2026-07-06 freeCodeCamp 練習：找出字串中最長單字的長度
// 練重點：split 切單字 + for...of 走訪 + 「擂台式」求最大值。

function findLongestWordLength(str) {
  let words = str.split(' ');
  let maxLength = 0;
  for (let word of words) {
    if (word.length > maxLength) {
      maxLength = word.length;
    }
  }
  return maxLength;
}

// --- 示範呼叫 ---
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog")); // 6 (jumped)
console.log(findLongestWordLength("What is the average airspeed velocity of an unladen swallow")); // 8 (airspeed / velocity / unladen / swallow)
console.log(findLongestWordLength("May the force be with you")); // 5 (force)
console.log(findLongestWordLength("")); // 0
