// Day 24｜React 互動待辦清單：新增 + 刪除（陣列型 state 的不可變更新）
// 新觀念：改清單時不直接動原陣列，而是「用舊的算出一個新陣列」再 setTodos
//   - 新增：setTodos([...todos, 新項目])   ← 展開舊的 + 加新的（spread，Day 9）
//   - 刪除：setTodos(todos.filter(...))     ← 留下不該刪的（filter，Day 1）
// 完成日期：2026-05-30

const { useState } = React;

function TodoApp() {
  // 清單：每一筆是一個物件 { id, text }
  const [todos, setTodos] = useState([]);
  // 輸入框文字（受控元件，Day 18）
  const [input, setInput] = useState("");

  // ════════════════════════════════════════════════
  // 任務 1：新增一筆待辦
  // ════════════════════════════════════════════════
  function handleAdd() {
    if(input.trim() === "") return
    const newTodo ={ id: Date.now(), text: input, done: false}
    setTodos([...todos,newTodo])
    setInput("")
  }

  // ════════════════════════════════════════════════
  // 任務 2：刪除指定 id 的待辦
  // ════════════════════════════════════════════════
  function handleDelete(id) {
    setTodos( todos.filter( todo => todo.id !== id ))
  }

  function handleToggle(id) {
    setTodos(
      todos.map(todo =>
        todo.id === id
          ? { ...todo, done: !todo.done }   // 是這筆：複製 + 把 done 反過來
          : todo                      // 不是這筆：原樣回傳
      )
    )
  }

  return (
    <div>
      <h2>我的待辦清單</h2>

      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleAdd}>新增</button>

      <ul>

        { 
        todos.map(todo => (
        <li key={todo.id} onClick={() => handleToggle(todo.id) } style={{ textDecoration: todo.done ? "line-through" : "none" }}>
          {todo.text}
          <button onClick={() => handleDelete(todo.id)}>刪除</button>
        </li>
        ))
        }

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
