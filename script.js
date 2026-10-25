/* =========================================
   MISTER SYSTEM OFFICIAL MARKETPLACE
   File: script.js
========================================= */

document.addEventListener("DOMContentLoaded", function () {
  // 1. Automatically update the copyright year
  const yearElement = document.getElementById("year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // 2. Add a visual effect when product cards are tapped
  const productCards = document.querySelectorAll(".product-card");

  productCards.forEach(function (card) {
    card.addEventListener("click", function (event) {
      // Do not interfere with WhatsApp or other links
      if (event.target.closest("a")) {
        return;
      }

      card.classList.add("card-selected");

      window.setTimeout(function () {
        card.classList.remove("card-selected");
      }, 350);
    });
  });

  // 3. Check whether product images have loaded
  const productImages = document.querySelectorAll(
    ".app-icon img, .screenshots img"
  );

  productImages.forEach(function (image) {
    image.addEventListener("error", function () {
      image.classList.add("image-unavailable");
    });
  });

  // 4. Add accessible labels to WhatsApp order links
  const orderButtons = document.querySelectorAll(".order-button");

  orderButtons.forEach(function (button) {
    button.setAttribute(
      "aria-label",
      "Order this product through WhatsApp"
    );
  });

  // 5. Log a simple development message
  console.info("Mister System Official Marketplace loaded.");
});
