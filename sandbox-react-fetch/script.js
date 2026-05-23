// Day 19｜React useEffect + fetch：文章清單載入器
// 完成日期：2026-05-23

const { useState, useEffect } = React;

// ════════════════════════════════════════════════
// 任務 1：PostList — 元件一載入就自動去 API 抓文章、顯示標題清單
// API：https://jsonplaceholder.typicode.com/posts（回傳文章陣列，每篇有 id / title / body）
// 重點：useEffect(() => { ... }, []) → 只在第一次載入跑一次
// ════════════════════════════════════════════════
function PostList() {
  const [posts,setPosts] = useState([]);
  const [isLoading,setIsLoading] = useState(true);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => {
        setPosts(data.slice(0,5));
        setIsLoading(false);
    });
  },[])

  return (
    <div>
      <ul>
        {posts.map(post => <li key={post.id}>{post.title}</li>)}
      </ul>
      <p>{isLoading ? '載入中...' : ''}</p>
    </div>
  )}

// ════════════════════════════════════════════════
// 任務 2：幫 PostList 加上「載入中…」狀態
// 資料還沒回來前顯示「載入中…」，回來後才顯示清單
// 提示：多一個 state isLoading（初始 true）；在最後一個 .then 裡 setIsLoading(false)
//       渲染時用三元或 && 判斷：isLoading ? 載入中 : 清單
// （先把任務 1 跑起來、確認清單出得來，再回頭加 loading）
// ════════════════════════════════════════════════

function App() {
  return (
    <div>
      <h2>文章清單</h2>
      <PostList />
    </div>
  );
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App />);
