function reverseString(str) {
  return str.split("").reverse().join("");
}

// 測試：
console.log(reverseString("hello"));                // "olleh"
console.log(reverseString("Howdy"));                // "ydwoH"
console.log(reverseString("Greetings from Earth")); // "htraE morf sgniteerG"
