// 1. 定義 generatePassword 函式，帶有一個表示長度的參數 (length)
function generatePassword(length) {
  // 可用的字元集
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let result = "";

  // 根據傳入的長度，隨機選取字元並串接
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    result += chars[randomIndex];
  }

  // 2, 3, 4, 5, 6. 傳回隨機產生的字串密碼
  return result;
}

// 7, 8, 9. 定義 password 變數，並將帶有長度引數的函式呼叫結果指定給它
const password = generatePassword(12);

// 10. 使用模板字面值印出指定的字串格式
console.log(`Generated password: ${password}`);
