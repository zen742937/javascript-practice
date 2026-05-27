// Day 22｜React 整合複習：文章搜尋（API 載入 + 過濾 + 清單）
// 不引入新觀念、整合 Day 15–21 學過的所有 React 語法
// 完成日期：2026-05-27

const { useState, useEffect } = React;

// ════════════════════════════════════════════════
// 子元件 1：SearchBox — 搜尋框（受控、state 在父層）
// 接 props：keyword、onKeywordChange
// 🔁 複習：Day 18 受控 input + Day 21 callback prop
// ════════════════════════════════════════════════
function SearchBox({ keyword, onKeywordChange }) {
  // TODO：return 一個 <input>
  //       value 綁 keyword、onChange 呼叫 onKeywordChange(e.target.value)
  return <input value={keyword} onChange={(e) => onKeywordChange(e.target.value)}></input>
}

// ════════════════════════════════════════════════
// 子元件 2：PostList — 顯示父層篩好的文章清單
// 接 props：posts（已篩過的陣列，每篇有 id 與 title）
// 🔁 複習：Day 15 map + key
// ════════════════════════════════════════════════
function PostList({ posts }) {
  // TODO：用 <ul> + map 把每篇 title 顯示成 <li>（記得 key={post.id}）
  return (
    <ul>
      {posts.map(post => <li key={post.id}>{post.title}</li>)}
    </ul>
  )
}

// ════════════════════════════════════════════════
// 父元件：PostSearch — 把全部組起來
// 🔁 複習：Day 17 useState、Day 19 useEffect+fetch+loading、Day 21 狀態提升
// ════════════════════════════════════════════════
function PostSearch() {
  // TODO 1：開三個 state（用 useState）
  //   - posts：文章陣列（初始 []）
  //   - keyword：搜尋關鍵字（初始 ''）
  //   - isLoading：是否載入中（初始 true）

  const [posts,setPosts] = useState([]);
  const [keyword,setKeyword] = useState('');
  const [isLoading, setIsLoading] = useState(true);


  // TODO 2：useEffect 在第一次載入時去抓 API（依賴陣列 []）
  //   - 網址：https://jsonplaceholder.typicode.com/posts
  //   - 流程：fetch → .then(res => res.json()) → .then(data => {
  //                                                  setPosts(data.slice(0, 10));   // 只取前 10 筆
  //                                                  setIsLoading(false);
  //                                                })

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => {
        setPosts(data.slice(0, 10));
        setIsLoading(false);
      });
  }, []);
  // TODO 3：用 keyword 篩 posts（標題包含關鍵字的留下）
  //   - const filtered = posts.filter(p => p.title.includes(keyword));

const filtered = posts.filter(post => post.title.includes(keyword))
if (isLoading) return <p>載入中…</p>;

  // TODO 4：return
  //   - isLoading 為 true：顯示「載入中…」
  //   - 載入完：顯示 <SearchBox> + 結果訊息（三元）+ <PostList>
  //     ・結果訊息：filtered.length === 0 ? <p>找不到文章</p> : <p>找到 {filtered.length} 篇</p>

return (
  <div>
  <SearchBox keyword={keyword} onKeywordChange={setKeyword} />
  {filtered.length === 0
    ? <p>找不到文章</p>
    : <p>找到 {filtered.length} 篇</p>}
  <PostList posts={filtered} />
  </div>
)

}

function App() {
  return (
    <div>
      <h2>文章搜尋</h2>
      <PostSearch />
    </div>
  );
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App />);
