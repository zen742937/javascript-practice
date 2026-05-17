// Day 12｜假 API 文章載入器（Promise + async/await + .then + 非同步）
// 完成日期：2026-05-17

// ────────────────────────────────────────────────
// 假 API（題目提供）：模擬 1 秒網路延遲
// ────────────────────────────────────────────────
function fetchPosts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, title: '為什麼我選擇前端工程師', likes: 142 },
        { id: 2, title: '用 React 做出第一個 App', likes: 89 },
        { id: 3, title: 'JS 陣列方法完全攻略', likes: 256 },
      ]);
    }, 1000);
  });
}

// ────────────────────────────────────────────────
// 第一題：用 .then() 拿到 posts、印出標題陣列
// ────────────────────────────────────────────────
function loadPostsWithThen() {
  fetchPosts().then((posts) => {
    console.log(posts.map(post => post.title));
  });
}

// ────────────────────────────────────────────────
// 第二題：用 async/await 做同樣的事
// ────────────────────────────────────────────────
async function loadPostsAsync() {
  const posts = await fetchPosts();
  console.log(posts.map(post => post.title));
}

// ────────────────────────────────────────────────
// 第三題：回傳讚數最高的文章標題
// ────────────────────────────────────────────────
async function getTopPostAsync() {
  const posts = await fetchPosts();
  const copyPosts = [...posts];
  return copyPosts.sort((a, b) => b.likes - a.likes)[0].title;
}

// ────────────────────────────────────────────────
// 執行（打開 DevTools 看 console）
// ────────────────────────────────────────────────
loadPostsWithThen();
loadPostsAsync();
getTopPostAsync().then(title => console.log(title));
