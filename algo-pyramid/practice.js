function pyramid(char, rows, inverted) {
  const maxWidth = 2 * rows - 1;
  let result = "\n";

  if (!inverted) {
    // 頂點朝上：字元數從 1 開始，每次 +2
    for (let i = 0; i < rows; i++) {
      const numChars = 1 + 2 * i;
      const spaces = (maxWidth - numChars) / 2;
      result += " ".repeat(spaces) + char.repeat(numChars) + "\n";
    }
  } else {
    // 頂點朝下：字元數從最大開始，每次 -2
    for (let i = 0; i < rows; i++) {
      const numChars = maxWidth - 2 * i;
      const spaces = (maxWidth - numChars) / 2;
      result += " ".repeat(spaces) + char.repeat(numChars) + "\n";
    }
  }

  return result;
}

// 測試：
console.log(pyramid("o", 4, false));
console.log(JSON.stringify(pyramid("o", 4, false)));
// 預期："\n   o\n  ooo\n ooooo\nooooooo\n"
console.log(JSON.stringify(pyramid("p", 5, true)));
// 預期："\nppppppppp\n ppppppp\n  ppppp\n   ppp\n    p\n"
