// Day 14｜部落格互動功能（addEventListener + click + input 取值）
// 完成日期：2026-05-19

// ────────────────────────────────────────────────
// 題目提供：文章資料
// ────────────────────────────────────────────────
const posts = [
  { id: 1, title: '為什麼我選擇前端工程師', likes: 142 },
  { id: 2, title: '用 React 做出第一個 App', likes: 89 },
  { id: 3, title: 'JS 陣列方法完全攻略', likes: 256 },
];

// ────────────────────────────────────────────────
// 題目提供：Day 13 你寫過的三個 function（直接複用）
// ────────────────────────────────────────────────
function updateTitle(newTitle) {
  const title = document.querySelector('#page-title');
  title.textContent = newTitle;
}

function renderPostList(posts) {
  const postsHTML = document.querySelector('#post-list');
  postsHTML.innerHTML = posts.map(({title,likes}) => `<li>${title}（${likes} 讚）</li>`).join('');
}

function showTopPost(posts) {
  const topPost = document.querySelector('#top-post');
  const copyPosts = [...posts];
  const topPostText = copyPosts.sort((a, b) => b.likes - a.likes)[0].title;
  topPost.textContent = `🏆 最熱門：${topPostText}`;
}

// ────────────────────────────────────────────────
// 第一題：監聽「換標題」按鈕
// 點擊後從 #title-input 取使用者輸入的值、呼叫 updateTitle
// ────────────────────────────────────────────────
function bindUpdateTitleButton() {
  const updateTitleBtn = document.querySelector('#update-title-btn');
  updateTitleBtn.addEventListener('click',() => {
    const titleInput = document.querySelector('#title-input');
    const newTitle = titleInput.value;
    updateTitle(newTitle);
});
}

// ────────────────────────────────────────────────
// 第二題：監聽「全部按讚」按鈕
// 點擊後每篇 likes +1、重新呼叫 renderPostList 更新畫面
// ────────────────────────────────────────────────
function bindLikeAllButton() {
  const likeAllBotton = document.querySelector('#like-all-btn');
  likeAllBotton.addEventListener('click',() =>{
    posts.forEach(post => post.likes ++);
    renderPostList(posts);
  });
}


// ────────────────────────────────────────────────
// 第三題：監聽「找出最熱門」按鈕
// 點擊後呼叫 showTopPost
// ────────────────────────────────────────────────
function bindFindTopButton() {
  const findTopBtn = document.querySelector('#find-top-btn');
  findTopBtn.addEventListener('click',() =>{
    showTopPost(posts);
  })
}

// ────────────────────────────────────────────────
// 執行（綁定一次就好）
// ────────────────────────────────────────────────
bindUpdateTitleButton();
bindLikeAllButton();
bindFindTopButton();
