// Day 13｜部落格文章渲染器（querySelector + innerHTML + DOM）
// 完成日期：2026-05-18

// ────────────────────────────────────────────────
// 題目提供：文章資料
// ────────────────────────────────────────────────
const posts = [
  { id: 1, title: '為什麼我選擇前端工程師', likes: 142 },
  { id: 2, title: '用 React 做出第一個 App', likes: 89 },
  { id: 3, title: 'JS 陣列方法完全攻略', likes: 256 },
];

// ────────────────────────────────────────────────
// 第一題：把 <h1> 改成新標題
// ────────────────────────────────────────────────
function updateTitle(newTitle) {
  const title = document.querySelector('#page-title')
  title.textContent = newTitle;
}



// ────────────────────────────────────────────────
// 第二題：把每篇文章變成 <li> 塞進 <ul>
// 每個 li 顯示「標題（N 讚）」
// ────────────────────────────────────────────────
function renderPostList(posts) {
  const postsHTML = document.querySelector('#post-list')
  postsHTML.innerHTML = posts.map(post => `<li>${post.title}（${post.likes} 讚）</li>`).join('');
}

// ────────────────────────────────────────────────
// 第三題：顯示讚數最高的文章在 #top-post
// 格式：「🏆 最熱門：{title}」
// ────────────────────────────────────────────────
function showTopPost(posts) {
  const topPost = document.querySelector('#top-post');
  const copyPosts = [...posts];
  const topPostText = copyPosts.sort((a,b) => b.likes - a.likes)[0].title ;
  topPost.textContent = `🏆 最熱門：${topPostText}`;
}

// ────────────────────────────────────────────────
// 執行
// ────────────────────────────────────────────────
updateTitle('zen 的學習日記');
renderPostList(posts);
showTopPost(posts);
