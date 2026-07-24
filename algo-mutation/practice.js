function mutation(arr) {
    // 將兩個字串都轉成小寫（不區分大小寫）
    const first = arr[0].toLowerCase();
    const second = arr[1].toLowerCase();

    // 檢查 second 中的每個字母是否都出現在 first 中
    for (let char of second) {
        if (!first.includes(char)) {
            return false;
        }
    }
    return true;
}

// 你可以直接呼叫測試：
console.log(mutation(["hello", "hey"]));        // false
console.log(mutation(["hello", "Hello"]));      // true
console.log(mutation(["Alien", "line"]));       // true
console.log(mutation(["Mary", "Army"]));        // true
console.log(mutation(["floor", "for"]));        // true
console.log(mutation(["Noel", "Ole"]));         // true
