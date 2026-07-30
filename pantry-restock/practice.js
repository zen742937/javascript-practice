const pantry = [
  { sku: "A10", name: "Tomatoes", qty: 4, expires: "2027-01-01", zone: "fridge" },
  { sku: "D43", name: "Pineapples", qty: 2, expires: "2020-01-01", zone: "general" }
];

const rawData = [
  "A10|Tomatoes|5|2027-01-01",
  "B21|Bananas|10|2027-01-01",
  "C32|Eggs|3|2027-01-01|fridge",
  "C32|Eggs|3|2027-01-01",
  "D43|Pineapples|0|2027-01-01",
  "E54|Peppers|-1|2027-01-01|fridge"
];

// 1. 解析貨物字串陣列
function parseShipment(rawData) {
  const seen = new Set();
  const result = [];

  for (const line of rawData) {
    const parts = line.split("|");
    const sku = parts[0];

    // 忽略重複的 SKU
    if (seen.has(sku)) continue;
    seen.add(sku);

    const name = parts[1];
    const qty = Number(parts[2]);   // 轉成數字
    const expires = parts[3];
    const zone = parts[4] || "general"; // 沒有 zone 時預設 general

    result.push({ sku, name, qty, expires, zone });
  }

  return result;
}

// 2. 規劃補貨動作
function planRestock(pantry, shipment) {
  const pantrySkus = new Set(pantry.map(item => item.sku));
  const actions = [];

  for (const item of shipment) {
    let type;

    if (item.qty <= 0) {
      type = "discard";
    } else if (pantrySkus.has(item.sku)) {
      type = "restock";
    } else {
      type = "donate";
    }

    actions.push({ type, item });
  }

  return actions;
}

// 3. 依 zone 分組動作
function groupByZone(actions) {
  const groups = {};

  for (const action of actions) {
    const zone = action.item.zone;
    if (!groups[zone]) {
      groups[zone] = [];
    }
    groups[zone].push(action);
  }

  return groups;
}

// 4. 深層複製儲藏室
function clonePantry(pantry) {
  return pantry.map(item => ({ ...item }));
}

// 5. 結合所有函式並輸出結果
const shipment = parseShipment(rawData);
const pantryCopy = clonePantry(pantry);   // 使用深層複製，避免影響原始資料
const actions = planRestock(pantryCopy, shipment);
const groupedActions = groupByZone(actions);

console.log(groupedActions);
