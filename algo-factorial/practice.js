// 1. 宣告 num 變數並指定值 (1-20 之間)
let num = 5;  // 你可以改成其他 1~20 的數字

// 2. 建立 factorialCalculator 函式
function factorialCalculator(n) {
    // 3. 在函式內宣告 result 並初始化為 1，使用迴圈計算階乘
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

// 4. 使用 num 呼叫函式並將結果存到 factorial
let factorial = factorialCalculator(num);

// 5. 建立符合格式的 resultMsg
let resultMsg = `Factorial of ${num} is ${factorial}`;

// 6. 輸出到主控台
console.log(resultMsg);
