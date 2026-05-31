// Day 25｜React 元件拆分：把待辦項目抽成 TodoItem 子元件（props 傳值 + 傳函式）
// 接續 Day 24 的待辦清單，這次不加功能，而是「重整結構」：
//   把原本寫在 map 裡的一整坨 <li>，抽成一個獨立的 TodoItem 元件。
// 新觀念：父元件把「資料」和「函式」一起當 props 傳給子元件（函式當 props，延續 Day 21）。
// 順便補：Day 24 留的事件冒泡尾巴 → 刪除鈕 onClick 加 e.stopPropagation()。
// 完成日期：2026-05-31

const { useState } = React;

// ════════════════════════════════════════════════
// 任務 1：建立 TodoItem 子元件（這天的主角）
// 接 props：todo（一筆待辦物件）、onToggle（切換函式）、onDelete（刪除函式）
// 要 return 一個 <li>，內容跟 Day 24 那個 <li> 一樣：
//   - 點 <li> → 呼叫 onToggle(todo.id)
//   - 完成的劃線 → style 三元 todo.done
//   - 顯示 todo.text
//   - 刪除鈕 → 呼叫 onDelete(todo.id)，並且加 e.stopPropagation() 擋冒泡
// ════════════════════════════════════════════════
function TodoItem({ todo, onToggle, onDelete }) {
  // TODO：return 一個 <li>（把 Day 24 的 <li> 搬過來、改成用 props 的 onToggle / onDelete）
  return (
    <li
      onClick={() => onToggle(todo.id)}
      style={{ textDecoration:todo.done ? "line-through" : "none" }}
    >
      {todo.text}
      <button onClick={(e) => { e.stopPropagation(); onDelete(todo.id); }}>
        刪除
      </button>
    </li>
  );
}

// ════════════════════════════════════════════════
// 父元件 TodoApp —— state 與 handler 已寫好（Day 24 你已熟練）
// 你只要改 return 裡的 <ul>：用 <TodoItem /> 取代原本那一整坨 <li>
// ════════════════════════════════════════════════
function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  function handleAdd() {
    if (input.trim() === "") return;
    const newTodo = { id: Date.now(), text: input, done: false };
    setTodos([...todos, newTodo]);
    setInput("");
  }

  function handleDelete(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  function handleToggle(id) {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  }

  return (
    <div>
      <h2>我的待辦清單</h2>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleAdd}>新增</button>

      <ul>
      {todos.map(todo => (
      <TodoItem
        key={todo.id}
        todo={todo}
        onToggle={handleToggle}
        onDelete={handleDelete}
      />
    ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <div>
      <TodoApp />
    </div>
  );
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App />);
