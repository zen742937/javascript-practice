// Day 26｜React 狀態提升複習：燈泡開關（基礎）
// 目標：把「狀態提升 + 函式當 props」用最單純的例子看清楚（沒有陣列/map/id）。
//
// 結構：一個爸爸 + 兩個小孩
//   LampApp（爸爸）—— 唯一握有 state「燈亮著沒」(isOn) 的人
//     ├── Bulb（小孩1，只負責「看」）   ← 拿到 isOn 這個「值」，畫出亮/暗
//     └── Switch（小孩2，只負責「按」） ← 拿到 onToggle 這個「函式」，按了通知爸爸
//
// 重點資料流：值往下傳（isOn → Bulb）、函式往下傳（onToggle → Switch）、事件往上報（Switch 按了 → 呼叫 onToggle → 爸爸改 state）。
// 完成日期：2026-05-31

const { useState } = React;

// ════════════════════════════════════════════════
// 小孩 1：Bulb —— 只負責「顯示」目前燈是亮還是暗
// 接 prop：isOn（布林值，從爸爸傳進來）
// 它沒有自己的 state，純粹照 isOn 畫畫面
// ════════════════════════════════════════════════
function Bulb({ isOn }) {
  // TODO：isOn 為 true → 顯示 <p>💡 燈亮了</p>
  //       isOn 為 false → 顯示 <p>🌑 燈是暗的</p>
  //       （用三元，或先算字串再放進 <p>）
  if(isOn){
    return <p>💡 燈亮了</p>
    } else {
    return <p>🌑 燈是暗的</p>
    }
  }

// ════════════════════════════════════════════════
// 小孩 2：Switch —— 只負責「按鈕」，按了就「通知爸爸」切換
// 接 prop：onToggle（函式，從爸爸傳進來）
// 它自己不知道、也不管燈現在什麼狀態，只負責喊一聲
// ════════════════════════════════════════════════
function Switch({ onToggle }) {
  // TODO：return 一個 <button>，文字「開關」，onClick 時呼叫 onToggle
  return <button onClick={onToggle}>開關</button>
}

function StatusText({isOn}){
  return <p>目前：{isOn ? "開" : "關"}</p>
}

// ════════════════════════════════════════════════
// 爸爸：LampApp —— state 住在這裡（這就是「狀態提升」：共用的狀態放在共同的父層）
// ════════════════════════════════════════════════
function LampApp() {
  // TODO 1：宣告 state isOn，初始值 false（一開始燈是暗的）
  //         const [isOn, setIsOn] = ...
  const [isOn,setIsOn] = useState(false);

  // TODO 2：寫 handleToggle —— 把 isOn 反過來（setIsOn(!isOn)）
  function handleToggle(){
    setIsOn(!isOn);
  }

  // TODO 3：return 裡放兩個小孩，把對應的東西當 props 傳下去：
  //   - <Bulb isOn={???} />        ← 傳「值」isOn
  //   - <Switch onToggle={???} />  ← 傳「函式」handleToggle（不要加括號）
  return (
    <div>
      <h2>燈泡開關</h2>
      <Bulb isOn={isOn} />
      <Switch onToggle={handleToggle}/>
      <StatusText isOn={isOn}/>
    </div>
  );
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<LampApp />);
