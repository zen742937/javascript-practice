// 1. 判斷是否為回文（不分大小寫）
function isPalindrome(word) {
  const lower = word.toLowerCase();
  return lower === lower.split("").reverse().join("");
}

// 2. 找出非回文字的索引
function findPalindromeBreaks(words) {
  if (!words || words.length === 0) {
    return [];
  }

  const breaks = [];
  for (let i = 0; i < words.length; i++) {
    if (!isPalindrome(words[i])) {
      breaks.push(i);
    }
  }
  return breaks;
}

// 3. 找出重複出現的片語起始索引（包含第一次，支援重疊）
function findRepeatedPhrases(words, phraseLength) {
  if (phraseLength >= words.length) {
    return [];
  }

  // 記錄每個片語出現的所有起始索引
  const phraseMap = new Map();

  for (let i = 0; i <= words.length - phraseLength; i++) {
    const phrase = words.slice(i, i + phraseLength).join(" ");
    if (!phraseMap.has(phrase)) {
      phraseMap.set(phrase, []);
    }
    phraseMap.get(phrase).push(i);
  }

  // 只保留出現超過一次的片語的所有索引
  const result = [];
  for (const indices of phraseMap.values()) {
    if (indices.length > 1) {
      result.push(...indices);
    }
  }

  // 依索引由小到大排序，讓結果穩定
  return result.sort((a, b) => a - b);
}

// 4. 分析多個文字，彙整每個文字的結果
function analyzeTexts(texts, phraseLength) {
  if (!texts || texts.length === 0) {
    return [];
  }

  return texts.map(words => ({
    repeatedPhrases: findRepeatedPhrases(words, phraseLength),
    palindromeBreaks: findPalindromeBreaks(words)
  }));
}

// 測試：
console.log(isPalindrome("racecar"));  // true
console.log(isPalindrome("Level"));    // true（不分大小寫）
console.log(isPalindrome("hello"));    // false

console.log(findPalindromeBreaks(["racecar", "hello", "level", "world"])); // [1, 3]
console.log(findPalindromeBreaks(["mom", "dad", "wow"]));                   // []
console.log(findPalindromeBreaks([]));                                      // []

// "the cat" 出現在索引 0 和 3
console.log(findRepeatedPhrases(["the", "cat", "sat", "the", "cat"], 2));   // [0, 3]
// 重疊：["a","a","a"] 的 "a a" 出現在索引 0 和 1
console.log(findRepeatedPhrases(["a", "a", "a"], 2));                       // [0, 1]
console.log(findRepeatedPhrases(["the", "cat"], 2));                        // []（phraseLength >= length）

console.log(analyzeTexts([
  ["the", "cat", "sat", "the", "cat"],
  ["racecar", "hello", "level"]
], 2));
console.log(analyzeTexts([], 2)); // []
