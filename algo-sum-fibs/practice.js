function sumFibs(num) {
  let prev = 0;
  let curr = 1;
  let sum = 0;

  // 當目前的費波那契數小於或等於給定數字時繼續執行
  while (curr <= num) {
    // 檢查是否為奇數，若為奇數則加到總和中
    if (curr % 2 !== 0) {
      sum += curr;
    }

    // 計算下一個費波那契數
    const next = prev + curr;
    prev = curr;
    curr = next;
  }

  return sum;
}

// 測試：
console.log(sumFibs(1));       // 2（1 + 1）
console.log(sumFibs(1000));    // 1785
console.log(sumFibs(4000000)); // 4613732
console.log(sumFibs(4));       // 5（1 + 1 + 3）
console.log(sumFibs(75024));   // 60696
console.log(sumFibs(75025));   // 135721
