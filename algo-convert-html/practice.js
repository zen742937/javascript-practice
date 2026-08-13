function convertHTML(str) {
  // 定義特殊字元與 HTML 實體的對照表
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };

  // 使用正則表達式全域尋找需要轉義的字元並進行替換
  return str.replace(/[&<>"']/g, match => htmlEntities[match]);
}

// 測試：
console.log(convertHTML("Dolce & Gabbana"));                // Dolce &amp; Gabbana
console.log(convertHTML("Hamburgers < Pizza < Tacos"));     // Hamburgers &lt; Pizza &lt; Tacos
console.log(convertHTML("Sixty > twelve"));                 // Sixty &gt; twelve
console.log(convertHTML('Stuff in "quotation marks"'));     // Stuff in &quot;quotation marks&quot;
console.log(convertHTML("Schindler's List"));               // Schindler&apos;s List
console.log(convertHTML("<>"));                             // &lt;&gt;
console.log(convertHTML("abc"));                            // abc
