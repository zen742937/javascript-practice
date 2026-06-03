// Day 27｜React 資料持久化：待辦清單 + localStorage（進階）
// 接續 Day 24 的待辦清單。功能都一樣（新增/刪除/切換），這天只加一件事：
//   讓資料「記得住」——重整頁面後，待辦清單不會消失。
//
// 新觀念：
//   - localStorage：瀏覽器內建的小倉庫，可以存資料，關掉分頁、重整都還在。
//       localStorage.setItem("鑰匙", "字串")  → 存
//       localStorage.getItem("鑰匙")          → 取（拿回字串，沒有就回 null）
//   - localStorage 只能存「字串」，但 todos 是陣列 → 要先轉換：
//       JSON.stringify(陣列)  → 把陣列/物件打包成字串（存的時候用）
//       JSON.parse(字串)      → 把字串拆回陣列/物件（取的時候用，Day 11 學過）
//   - useEffect：每當 todos 變了，就把它存進 localStorage（依賴陣列 [todos]）
// 完成日期：2026-06-03

const { useState, useEffect } = React;

function TodoApp() {
  // ════════════════════════════════════════════════
  // 任務 1：載入 —— 一開始就從 localStorage 把舊的待辦讀回來
  // useState 可以接「一個函式」當初始值，這個函式只在第一次執行一次。
  // TODO 1：把初始值改成「從 localStorage 讀回來」：
  //   const [todos, setTodos] = useState(() => {
  //     const saved = localStorage.getItem("todos");   // 拿回字串或 null
  //     return saved ? JSON.parse(saved) : [];          // 有就拆包成陣列，沒有就空陣列
  //   });
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  }); 

  const [input, setInput] = useState("");

  // ════════════════════════════════════════════════
  // 任務 2：儲存 —— 每當 todos 改變，就寫進 localStorage
  // TODO 2：補一個 useEffect，依賴陣列放 [todos]：
  //   useEffect(() => {
  //     localStorage.setItem("todos", JSON.stringify(todos));
  //   }, [todos]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);


  // ── 以下功能與 Day 24 相同，已幫你寫好，不用改 ──
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
      <h2>我的待辦清單（會記得住）</h2>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleAdd}>新增</button>
      <ul>
        {todos.map(todo => (
          <li
            key={todo.id}
            onClick={() => handleToggle(todo.id)}
            style={{ textDecoration: todo.done ? "line-through" : "none" }}
          >
            {todo.text}
            <button onClick={(e) => { e.stopPropagation(); handleDelete(todo.id); }}>刪除</button>
          </li>
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
