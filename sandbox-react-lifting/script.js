// Day 21｜React 狀態提升：商品搜尋（SearchBox + ProductList 共用 state）
// 完成日期：2026-05-24

const { useState } = React;

// 假商品資料（前端常見：電商清單）。本機資料、不需網路。
const PRODUCTS = [
  { id: 1, name: '無線藍牙耳機' },
  { id: 2, name: '機械式鍵盤' },
  { id: 3, name: '藍牙喇叭' },
  { id: 4, name: '人體工學滑鼠' },
  { id: 5, name: '降噪耳罩耳機' },
];

// ════════════════════════════════════════════════
// 任務 1：SearchBox — 搜尋框（受控 input，但 state 不在自己身上）
// 接 props：keyword（目前關鍵字）+ onChange（父層傳下來的「改 keyword」函式）
// 重點：state 住在父層，SearchBox 只是「借用 keyword 顯示」+「回報使用者輸入」
// ════════════════════════════════════════════════
function SearchBox({ keyword, onKeywordChange }) {
  return <input value={keyword} onChange={e => onKeywordChange(e.target.value)} />
}

// ════════════════════════════════════════════════
// 任務 2：ProductList — 顯示「父層篩選好的」商品清單
// 接 props：products（已經被父層篩選過的陣列）
// 重點：ProductList 不自己篩、只負責顯示
// ════════════════════════════════════════════════
function ProductList({ products }) {
  // TODO：return 一個 <ul>，用 map 把 products 顯示成 <li>（記得 key={p.id}）
  return (
    <div>
      <ul>
      {products.map( product => <li key={product.id}>{product.name}</li> )}
      </ul>
    </div>
  )
}
// ════════════════════════════════════════════════
// 父元件：ProductSearch — 持有共享 state，把兩個孩子接起來
// ════════════════════════════════════════════════
function ProductSearch() {
  // ① 共享的 state 放在「父層」—— 這就是「狀態提升」的核心
  const [keyword, setKeyword] = useState('');

  // ② 父層用 keyword 篩選 PRODUCTS（名稱包含關鍵字的留下）
  const filtered = PRODUCTS.filter(p => p.name.includes(keyword));

  // ③ 往下傳：keyword + setKeyword 給 SearchBox、filtered 給 ProductList
  //    （這個父元件已幫你寫好當範例，請讀懂它怎麼把兩個孩子「接」起來）
  return (
    <div>
      <SearchBox keyword={keyword} onKeywordChange={setKeyword} />
      { filtered.length === 0 ? <p>找不到商品</p> : <p>找到{filtered.length}項商品</p>}
      <ProductList products={filtered} />
    </div>
  );
}

function App() {
  return (
    <div>
      <h2>商品搜尋</h2>
      <ProductSearch />
    </div>
  );
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App />);