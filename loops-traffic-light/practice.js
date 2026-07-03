// 2026-07-03 freeCodeCamp 練習：紅綠燈序列模擬器
// 練重點：巢狀 for 迴圈 + 守衛式驗證（guard clause）。

const config1 = {
  fault: false,
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 4 }
  ]
};

const config2 = {
  fault: false,
  phases: [
    { color: "red", duration: 3 },
    { color: "yellow", duration: -2 },
    { color: "green", duration: 6 }
  ]
};

const config3 = {
  fault: true,
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 6 }
  ]
};

const config4 = {
  fault: false,
  phases: []
};

// 執行交通號誌序列
function runSequence(config, cycles) {
  // 檢查是否有階段資料
  if (config.phases.length === 0) {
    console.log("No phases found");
    return;
  }

  // 檢查是否發生硬體/系統異常
  if (config.fault === true) {
    console.log("Faulted phase!");
    return;
  }

  // 迭代指定的週期次數
  for (let i = 0; i < cycles; i++) {
    for (let j = 0; j < config.phases.length; j++) {
      const phase = config.phases[j];

      // 檢查階段持續時間是否有效
      if (phase.duration <= 0) {
        console.log("Invalid phase detected");
      } else {
        console.log(`Switching to ${phase.color} for ${phase.duration} s`);
      }
    }
  }
}

// 產生累積時間軸
function generateTimeline(config, cycles) {
  const timeline = [];
  let accumulatedTime = 0;

  // 不做任何驗證，直接處理所有週期和階段
  for (let i = 0; i < cycles; i++) {
    for (let j = 0; j < config.phases.length; j++) {
      const phase = config.phases[j];
      accumulatedTime += phase.duration;
      timeline.push(accumulatedTime);
    }
  }

  return timeline;
}

// --- 示範呼叫 ---
console.log("== runSequence(config1, 1) 正常 ==");
runSequence(config1, 1);
console.log("== runSequence(config2, 1) 含負值階段 ==");
runSequence(config2, 1);
console.log("== runSequence(config3, 1) fault ==");
runSequence(config3, 1);
console.log("== runSequence(config4, 1) 無階段 ==");
runSequence(config4, 1);
console.log("== generateTimeline(config1, 1) ==");
console.log(generateTimeline(config1, 1));
console.log("== generateTimeline(config2, 1) 沒驗證，負值也照加 ==");
console.log(generateTimeline(config2, 1));
