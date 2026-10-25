const products = [
  { name: "FR Voice Room", price: 999, symbol: "FR" },
  { name: "King Ho Voice Room", price: 488, symbol: "KH" },
  { name: "ChatGroup Live", price: 500, symbol: "CG" },
  { name: "Voice Live QR", price: 300, symbol: "QR" },
  { name: "Love Letter Room", price: 2660, symbol: "LL" }
];
const whatsappNumber = "8801929138625";
const money = value => "$" + value.toLocaleString("en-US");
const grid = document.getElementById("product-grid");
grid.innerHTML = products.map(product => {
  // User-provided price is treated as the sale price after 45% off.
  const originalPrice = Math.round(product.price / 0.55);
  const saving = originalPrice - product.price;
  const message = `Assalamu Alaikum, I would like to know more about ${product.name}. Current price: ${money(product.price)} (45% off).`;
  const waLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  return `
    <article class="product-card">
      <div class="product-visual">
        <span class="discount">45% OFF</span>
        <div class="product-symbol" aria-hidden="true">${product.symbol}</div>
      </div>
      <div class="product-body">
        <h3>${product.name}</h3>
        <div class="price-line"><span class="current-price">${money(product.price)}</span><span class="old-price">${money(originalPrice)}</span></div>
        <div class="saving">You save ${money(saving)}</div>
        <a class="whatsapp-btn" href="${waLink}" target="_blank" rel="noopener noreferrer">◉ Contact on WhatsApp</a>
      </div>
    </article>`;
}).join("");
document.getElementById("year").textContent = new Date().getFullYear();
