function pairElement(str) {
  // 定義鹼基對應表
  const pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
  };

  // 將字串拆解成字元陣列，並轉換為 [原鹼基, 配對鹼基] 的二維陣列
  return str.split("").map(char => [char, pairs[char]]);
}

// 測試：
console.log(JSON.stringify(pairElement("ATCGA")));
// [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]
console.log(JSON.stringify(pairElement("TTGAG")));
// [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]
console.log(JSON.stringify(pairElement("CTCTA")));
// [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]
