// React Warmup｜練 component + props
// 不引入新觀念、只練「定義 component + 解構 props + JSX 渲染」

// ════════════════════════════════════════════════
// Mini 1：Greeting
// 接收 name (字串)、回傳 <h1>哈囉, {name}!</h1>
// ════════════════════════════════════════════════
function Greeting({ name }) {
  return <h1>哈囉, {name}!</h1>;
}

// ════════════════════════════════════════════════
// Mini 2：UserCard
// 接收 name (字串) + age (數字)、回傳：
//   <div>
//     <h3>{name}</h3>
//     <p>{age} 歲</p>
//   </div>
// ════════════════════════════════════════════════
function UserCard({ name, age }) {
  return (
  <div>
    <h3>{name}</h3>
    <p>{age} 歲</p>
  </div>
  );
}

// ════════════════════════════════════════════════
// Mini 3：ProductCard
// 接收 name (字串) + price (數字) + inStock (boolean)、回傳：
//   <li>
//     <strong>{name}</strong> — NT${price}（{inStock ? '有貨' : '缺貨'}）
//   </li>
// ════════════════════════════════════════════════
function ProductCard({ name, price, inStock }) {
  return (
  <li>
  <strong>{name}</strong> - NT${price} ({inStock ? '有貨' : '缺貨'})
  </li>
  );
}

// ════════════════════════════════════════════════
// App：把上面三題的用法都組合起來
// 寫完一題、把對應的區塊「取消註解」、重新整理瀏覽器就能看到畫面
// ════════════════════════════════════════════════
function App() {
  return (
    <div>
      <h2>Mini 1：Greeting</h2>
      {<Greeting name="zen" />}
      {<Greeting name="Tammy" />}

      <h2>Mini 2：UserCard</h2>
      {<UserCard name="zen" age={28} />}
      {<UserCard name="Tammy" age={35} />}

      <h2>Mini 3：ProductCard</h2>
      <ul>
        { <ProductCard name="iPhone 15" price={29900} inStock={true} /> }
        { <ProductCard name="MacBook Pro" price={75000} inStock={false} /> }
      </ul>
    </div>
  );
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App />);
