// 二手衣 × 迴圈練習（Day 36）
// 資料取自 thrift-store 專案的 src/products.js，這裡複製一份讓檔案能單獨用 node 跑。
// 規則：只准用題目指定的迴圈寫法。寫完用 node loops-thrift/practice.js 驗證。

const PRODUCTS = [
  { id: 1, name: "黑色寬版西裝外套", price: 1200, category: "外套", size: "M" },
  { id: 2, name: "白色基本款 T 恤",   price: 250,  category: "上衣", size: "S" },
  { id: 3, name: "復古直筒牛仔褲",   price: 680,  category: "褲子", size: "M" },
  { id: 4, name: "灰色連帽外套",     price: 900,  category: "外套", size: "L" },
  { id: 5, name: "黑色條紋長袖",     price: 420,  category: "上衣", size: "M" },
  { id: 6, name: "工裝寬褲",         price: 750,  category: "褲子", size: "L" },
];

// ── 第 1 題 ── for...of：店內總值
// 把所有商品的 price 加總，回傳數字。正確答案應為 4200。
// 💡 用 for...of 自己跑，不准用 forEach。
function getTotalInventoryValue(products) {
  // TODO
}

// ── 第 2 題 ── for...of + if：分類篩選
// 回傳該分類的所有商品（新陣列）。例如 "外套" → 2 件。
// 💡 先開空陣列 result，符合就 push，最後回傳。
function filterByCategory(products, category) {
  // TODO
}

// ── 第 3 題 ── for...in：印出一件商品的所有欄位
// 傳一件商品物件，印成「欄位名: 值」，例如 name: 黑色寬版西裝外套
// 💡 for...in 跑的是 key。用 key 拿值要用「括號存取」還是「點存取」？想清楚為什麼。
function printProductFields(product) {
  // TODO
}

// ── 第 4 題 ── break：找第一件買得起的
// 從頭找，回傳第一件 price <= budget 的商品；找到就 break。
// 💡 找不到任何一件時要回傳什麼？自己決定一個合理的值。
function findFirstAffordable(products, budget) {
  // TODO
}

// ── 第 5 題 ── continue：數出貴的商品
// 數出 price > threshold 的商品數量，但要用 continue：遇到便宜的就跳過。
// 💡 結果跟用 if 包起來一樣——體會 continue 的語氣。
function countExpensive(products, threshold) {
  // TODO
}

// ── 第 6 題（進階）── while：錢包能買幾件
// 從第 1 件開始依序買，每買一件從 wallet 扣 price，直到下一件買不起就停，回傳買了幾件。
// 💡 while 條件要同時滿足：還有商品可買 && 錢包付得起當前這件。
function buyUntilBroke(products, wallet) {
  // TODO
}

// ── 自我驗證區（寫完再把對應那行的 // 拿掉來測）──
// console.log(getTotalInventoryValue(PRODUCTS));        // 預期 4200
// console.log(filterByCategory(PRODUCTS, "外套"));       // 預期 2 件
// printProductFields(PRODUCTS[0]);                       // 預期印出 6 行欄位
// console.log(findFirstAffordable(PRODUCTS, 500));        // 預期 id:2 白色基本款 T 恤
// console.log(countExpensive(PRODUCTS, 700));            // 預期 3
// console.log(buyUntilBroke(PRODUCTS, 2000));            // 自己推算答案再驗證
