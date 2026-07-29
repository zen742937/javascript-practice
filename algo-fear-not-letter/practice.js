function fearNotLetter(str) {
  for (let i = 0; i < str.length - 1; i++) {
    // 取得目前字母與下一個字母的字元碼
    const currentCode = str.charCodeAt(i);
    const nextCode = str.charCodeAt(i + 1);

    // 如果下一個字母的字元碼不是連續的（差大於 1），表示中間缺了字母
    if (nextCode - currentCode > 1) {
      // 回傳缺失的字母
      return String.fromCharCode(currentCode + 1);
    }
  }

  // 如果整個字串都是連續的，回傳 undefined
  return undefined;
}

// 測試：
console.log(fearNotLetter("abce"));               // "d"
console.log(fearNotLetter("abcdefghjklmno"));      // "i"
console.log(fearNotLetter("stvwx"));               // "u"
console.log(fearNotLetter("bcdf"));                // "e"
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz")); // undefined
