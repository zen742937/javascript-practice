// 2026-07-16 複習：找出字串中最長單字的長度（07-06 原題重做）
// 這次改用「索引 for 迴圈」走訪，對照原版的 for...of。

function findLongestWordLength(str) {
  // Step 1: Split the string into an array of words using a space as the separator
  const words = str.split(' ');

  // Step 2: Create a variable to keep track of the maximum length
  let maxLength = 0;

  // Step 3: Loop through the array of words
  for (let i = 0; i < words.length; i++) {
    // If the current word's length is greater than our current max, update it
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }

  // Step 4: Return the final maximum length
  return maxLength;
}

// Example usage:
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog")); // 6 (jumped)
