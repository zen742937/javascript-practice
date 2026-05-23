// Day 18｜React 受控元件：即時問候表單 + 留言字數
// 完成日期：2026-05-23

const { useState } = React;

// ════════════════════════════════════════════════
// 任務 1：GreetingForm（即時問候）
// 一個輸入框，使用者打字時，下方即時顯示「Hello, {名字}！」
// 沒有 props。重點：value 綁 state、onChange 用 e.target.value 更新 state
// ════════════════════════════════════════════════
function GreetingForm() {
  const [name,setName] = useState('');
  return (
    <div>
      <input value={name} onChange={e => setName(e.target.value)}/>
      {/* name && ... 的意思：name 有值（非空字串）才渲染後面那段。空字串是 falsy，所以沒打字時整行就不顯示。 */}
      {name && <p>Hello, {name}！</p>} 
    </div>
  );
}

// ════════════════════════════════════════════════
// 任務 2：CommentBox（留言字數）
// 接 props maxLength（上限字數），輸入框下方即時顯示「還可以輸入 N 字」
// 重點：剩餘字數是「算出來的」 → maxLength 減掉目前文字長度
// ════════════════════════════════════════════════
function CommentBox({ maxLength }) {
  const [text,setText] = useState('');
  const remaining = maxLength - text.length;
  return (
    <div>
      <input value={text} onChange={e => setText(e.target.value)}/>
      <p style={{ color: remaining<0 ? 'red' : 'grey'  }}>
      還可以輸入 {remaining} 字
      </p>
    </div>
  )
}

// ════════════════════════════════════════════════
// App：寫好一題就把對應區塊取消註解、重整看畫面
// ════════════════════════════════════════════════
function App() {
  return (
    <div>
      <h2>任務 1：即時問候</h2>
      <GreetingForm />

      <h2>任務 2：留言字數</h2>
      <CommentBox maxLength={100} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App />);
