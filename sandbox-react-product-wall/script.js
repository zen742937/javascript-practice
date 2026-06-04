// Day 28｜React 整合：商品牆（分類篩選 + 搜尋）— 二手衣作品 Phase 1 預演
// 沒有新觀念，是把你會的整合起來：map（Day 23）+ 元件拆分（Day 25）+ filter（Day 21/22）+ 狀態提升（Day 26）。
// 難點：同時套用「兩個篩選條件」（分類 + 搜尋）。
// 這題就是你二手衣作品商品牆的雛形，做完可以直接延伸。
// 完成日期：（做完再填）YYYY-MM-DD

const { useState } = React;

// 商品資料（給你，模擬二手衣庫存。之後做真作品時換成自己的衣服）
const PRODUCTS = [
  { id: 1, name: "黑色寬版西裝外套", price: 1200, category: "外套", size: "M" },
  { id: 2, name: "白色基本款 T 恤",   price: 250,  category: "上衣", size: "S" },
  { id: 3, name: "復古直筒牛仔褲",   price: 680,  category: "褲子", size: "M" },
  { id: 4, name: "灰色連帽外套",     price: 900,  category: "外套", size: "L" },
  { id: 5, name: "黑色條紋長袖",     price: 420,  category: "上衣", size: "M" },
  { id: 6, name: "工裝寬褲",         price: 750,  category: "褲子", size: "L" },
];

const CATEGORIES = ["全部", "上衣", "外套", "褲子"];

// ════════════════════════════════════════════════
// 子元件：ProductCard —— 顯示一件商品（鞏固 Day 25 的元件拆分）
// 接 prop：product（一筆商品物件）
// ════════════════════════════════════════════════
function ProductCard({ product }) {
  // TODO 1：return 一個 <div>，顯示 product 的 name / 價格（NT$）/ 分類 / 尺寸
  //         （排版自由，先能顯示就好）
}

// ════════════════════════════════════════════════
// 父元件：ProductWall —— 管 state、算篩選結果、組畫面
// ════════════════════════════════════════════════
function ProductWall() {
  // TODO 2：兩個 state
  //   - keyword：搜尋字（初始 ""）
  //   - selectedCategory：目前選的分類（初始 "全部"）

  // TODO 3：算出 filtered —— 同時符合「分類」和「搜尋」兩個條件
  //   分類條件：selectedCategory === "全部" 就全留，否則只留 product.category === selectedCategory
  //   搜尋條件：product.name 包含 keyword（用 includes）
  //   提示：可以 PRODUCTS.filter(...) 一個 filter 裡用 && 把兩個條件串起來

  return (
    <div>
      <h2>我的二手衣</h2>

      {/* TODO 4：搜尋框 —— 受控 input，value 綁 keyword、onChange 更新 keyword */}

      {/* TODO 5：分類按鈕 —— 用 CATEGORIES.map 做出每個分類的 <button>，
          點了就 setSelectedCategory(該分類)。記得 key。 */}

      {/* TODO 6：商品列表 —— 用 filtered.map 渲染 <ProductCard />，
          傳 key={...} 和 product={...} */}

      {/* 加分：filtered 是空陣列時，顯示一段「找不到符合的商品」 */}
    </div>
  );
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<ProductWall />);
