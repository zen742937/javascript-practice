function chunkArrayInGroups(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

// 測試：
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2)); // [["a","b"],["c","d"]]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3));   // [[0,1,2],[3,4,5]]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2));   // [[0,1],[2,3],[4,5]]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));   // [[0,1,2,3],[4,5]]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4)); // [[0,1,2,3],[4,5,6,7],[8]]
