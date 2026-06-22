// 2026-06-22 for...of 練習

// 1. 走訪字串，逐字印出
function printCharacters(str) {
  for (const char of str) {
    console.log(char);
  }
}
printCharacters("hello");

// 2. 計算陣列中符合 match 的單字數量
function getMatchedWordCount(sentence, match) {
  let count = 0;

  for (const word of sentence) {
    if (word === match) {
      count++;
    }
    console.log(`Checking "${word}" against "${match}" | Running count: ${count}`);
  }

  return count;
}

console.log(
  getMatchedWordCount(
    ["I", "really", "really", "really", "like", "to", "code"],
    "really"
  )
);
