// Day 20｜React useEffect 依賴陣列：上一篇／下一篇文章瀏覽器
// 完成日期：2026-05-23

const { useState, useEffect } = React;

// ════════════════════════════════════════════════
// 任務 1：PostViewer — 顯示「某一篇」文章
// API：https://jsonplaceholder.typicode.com/posts/1
//      ↑ 網址最後的數字 = 文章編號，回傳「單一篇」文章物件 { id, title, body }
// 重點：useEffect 的依賴陣列放 [postId]，postId 一變就重新抓
// ════════════════════════════════════════════════
function PostViewer() {

  const [postId,setPostId] = useState(1);
  const [post,setPost] = useState(null)

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(res => res.json())
      .then(data => setPost(data));
  },[postId])

  if (!post) return <p>載入中...</p>;
  return (
    <div>
      <p>{post.title} {post.body}</p>
      <button onClick={() => setPostId(postId => postId - 1)} disabled={postId <= 1}>上一篇</button>
      <button onClick={() => setPostId(postId => postId + 1) } disabled={postId >= 100}>下一篇</button>
    </div>
  );
}

// ════════════════════════════════════════════════
// 任務 2：加「上一篇 / 下一篇」按鈕
// 按鈕改 postId，useEffect 因為依賴 [postId] 會自動重抓那一篇
// 提示：上一篇 onClick={() => setPostId(id => id - 1)}
//       下一篇 onClick={() => setPostId(id => id + 1)}   ← 函式型更新（Day 17 學過）
// ════════════════════════════════════════════════

function App() {
  return (
    <div>
      <h2>文章瀏覽器</h2>
      <PostViewer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App />);
