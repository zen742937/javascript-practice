let inventory = [];

function findProductIndex(productName) {
  const name = productName.toLowerCase();

  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name === name) {
      return i;
    }
  }
  return -1;
}

function addProduct(product) {
  const name = product.name.toLowerCase();
  const index = findProductIndex(name);

  if (index !== -1) {
    inventory[index].quantity += product.quantity;
    console.log(name + " quantity updated");
  } else {
    inventory.push({ name: name, quantity: product.quantity });
    console.log(name + " added to inventory");
  }
}

function removeProduct(productName, quantity) {
  const name = productName.toLowerCase();
  const index = findProductIndex(name);

  if (index === -1) {
    console.log(name + " not found");
    return;
  }

  if (inventory[index].quantity < quantity) {
    console.log("Not enough " + name + " available, remaining pieces: " + inventory[index].quantity);
    return;
  }

  inventory[index].quantity -= quantity;
  console.log("Remaining " + name + " pieces: " + inventory[index].quantity);

  if (inventory[index].quantity === 0) {
    inventory.splice(index, 1);
  }
}

// 測試：
addProduct({ name: "FLOUR", quantity: 5 });   // flour added to inventory
addProduct({ name: "flour", quantity: 15 });  // flour quantity updated
addProduct({ name: "Rice", quantity: 5 });    // rice added to inventory
console.log(inventory); // [{name:"flour",quantity:20}, {name:"rice",quantity:5}]

console.log(findProductIndex("FloUr")); // 0（不分大小寫）
console.log(findProductIndex("sugar")); // -1

removeProduct("FLOUR", 5);   // Remaining flour pieces: 15
removeProduct("sugar", 1);   // sugar not found
removeProduct("rice", 10);   // Not enough rice available, remaining pieces: 5
removeProduct("rice", 5);    // Remaining rice pieces: 0 → 之後從陣列移除
console.log(inventory); // [{name:"flour",quantity:15}]（rice 歸零後被移除）
