// Day 17｜useState 入門：Counter + Toggle
// 完成日期：2026-05-22

// ════════════════════════════════════════════════
// 從 React 拿出 useState（CDN 環境寫法）
// 未來用 Vite/Next.js 會改成 import { useState } from 'react'
// ════════════════════════════════════════════════
const { useState } = React;

// ════════════════════════════════════════════════
// 任務 1：Counter
// 接 props initialCount、顯示「目前：{count}」、+1 按鈕
// ════════════════════════════════════════════════
function Counter({ initialCount }) {
  const [count,setCount] = useState(initialCount);

  return (
    <div>
      <p>目前：{count}</p>
      <button onClick={()=> setCount(count => count +1)} >+1</button>
    </div>
  )
}

// ════════════════════════════════════════════════
// 任務 2：Toggle
// 接 props initialOn (boolean)、顯示「燈：開」/「燈：關」、切換按鈕
// ════════════════════════════════════════════════
function Toggle({ initialOn }) {
  const [on,setOn] = useState(initialOn);

  return(
    <div>
      <p>燈：{on ? '開' : '關'}</p>
      <button onClick={()=> setOn(on => !on)}>切換</button>
    </div>
  )
}

// ════════════════════════════════════════════════
// App：寫完一題、把對應的區塊取消註解、重整看畫面
// ════════════════════════════════════════════════
function App() {
  return (
    <div>
      <h2>任務 1：Counter</h2>
      <Counter initialCount={0} />
      <Counter initialCount={100} />

      <h2>任務 2：Toggle</h2>
      <Toggle initialOn={true} />
      <Toggle initialOn={false} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App />);
