// Day 23｜React 基礎鞏固：商品卡片 + 點讚按鈕 + 待辦清單（props / useState / map）
// 難度：基礎，刻意鞏固前面的觀念
// 完成日期：2026-05-29

const { useState } = React;

// ════════════════════════════════════════════════
// 第 1 題：用 props 顯示商品卡片（props 基礎）
// 接 props：name（商品名稱）、price（價格）
// 顯示成兩行：商品：黑色連帽外套 / 價格：NT$1280
// ════════════════════════════════════════════════
function ProductCard(props) {
  return (
    <div>
      <p>商品：{props.name}</p> 
      <p>價格：NT${props.price}</p> 
    </div>
  );
}

// ════════════════════════════════════════════════
// 第 2 題：點讚按鈕（useState 基礎）
// 一個「❤️ 讚」按鈕 + 目前讚數，每按一次 +1
// 提示：不要寫 likes = likes + 1，要呼叫 setLikes(likes + 1)
// ════════════════════════════════════════════════
function LikeButton() {
  const [likes, setLikes] = useState(0);

  return (
    <div>
      <p>讚數：{likes}</p>
      <button onClick={() => {setLikes(likes => likes + 1 )}}>
        ❤️ 讚
      </button>
    </div>
  );
}

// ════════════════════════════════════════════════
// 第 3 題：用 map 渲染待辦清單（map 渲染列表）
// 把 todos 陣列渲染成 <ul>，每一筆是一個 <li>
// 提示：每個 <li> 要加 key（例如 key={index}）
// ════════════════════════════════════════════════
function TodoList() {
  const todos = ["買咖啡豆", "寫 React 練習", "去健身房"];

  return (
    <ul>
      {todos.map((todo,index) => <li key={index}>{todo}</li>)}
    </ul>
  );
}

// ── 把三題組起來：用 App 當入口 ──
function App() {
  return (
    <div>
      <h2>第 1 題：商品卡片</h2>
      <ProductCard name="黑色連帽外套" price={1280}/>
      <h2>第 2 題：點讚按鈕</h2>
      <LikeButton />

      <h2>第 3 題：待辦清單</h2>
      <TodoList />
    </div>
  );
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App />);
