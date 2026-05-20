// Day 15｜第一個 React Component（JSX + component + props）
// 完成日期：2026-05-20

// ────────────────────────────────────────────────
// 題目提供：文章資料
// ────────────────────────────────────────────────
const posts = [
  { id: 1, title: '為什麼我選擇前端工程師', likes: 142 },
  { id: 2, title: '用 React 做出第一個 App', likes: 89 },
  { id: 3, title: 'JS 陣列方法完全攻略', likes: 256 },
];

// ────────────────────────────────────────────────
// 第一題：PostCard component
// 接 props title 跟 likes、回傳 <li>{title}（{likes} 讚）</li>
// ────────────────────────────────────────────────
function PostCard({ title, likes }) {
  console.log('PostCard 收到的 props:', { title, likes });
  return <li>{title} ({likes} 讚)</li>
}

// ────────────────────────────────────────────────
// 第二題：App component（主 component、組合一切）
// <div> 裡放 <h1> + <ul>，<ul> 裡用 posts.map(...) 渲染一堆 <PostCard ... />
// ────────────────────────────────────────────────
function App() {
  return (
    <div>
      <h1>zen 的部落格</h1>
      <ul>
        {posts.map(post =>(
          <PostCard key={post.id} title={post.title} likes={post.likes}/>
        ))}
      </ul>
    </div>
  )
}

// ────────────────────────────────────────────────
// 第三步：渲染到 #root（這段固定寫法、複製即可）
// ────────────────────────────────────────────────
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App />);
