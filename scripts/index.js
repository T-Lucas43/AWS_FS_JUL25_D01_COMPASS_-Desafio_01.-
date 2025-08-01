document.addEventListener("DOMContentLoaded", () => {
  // === EMAIL SUBSCRIPTION ===
  const emailInput = document.getElementById("email");
  const subscribeBtn = document.getElementById("subscribe-btn");
  const cancelBtn = document.getElementById("cancel-btn");
  const message = document.getElementById("message");

  const savedEmail = localStorage.getItem("email");
  if (savedEmail) {
    emailInput.value = savedEmail;
    emailInput.disabled = true;
    subscribeBtn.style.display = "none";
    cancelBtn.style.display = "inline";
    showMessage("Already subscribed!", "green");
  }

  subscribeBtn.addEventListener("click", () => {
    const email = emailInput.value.trim();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    if (!email || !regex.test(email)) {
      showMessage("Invalid email format.", "red");
      return;
    }

    localStorage.setItem("email", email);
    emailInput.disabled = true;
    subscribeBtn.style.display = "none";
    cancelBtn.style.display = "inline";
    showMessage("Successfully subscribed!", "green");
  });

  cancelBtn.addEventListener("click", () => {
    localStorage.removeItem("email");
    emailInput.disabled = false;
    emailInput.value = "";
    subscribeBtn.style.display = "inline";
    cancelBtn.style.display = "none";
    showMessage("Subscription cancelled.", "orange");
  });

  function showMessage(text, color = "black") {
    message.textContent = text;
    message.style.color = color;
  }

  // === FAQ TOGGLE WITH ARROW ANIMATION ===
  const questions = document.querySelectorAll(".faq-question");
  questions.forEach((btn) => {
    btn.addEventListener("click", () => {
      const answer = btn.nextElementSibling;
      const isOpen = btn.classList.contains("open");

      // Fecha todos os outros
      document.querySelectorAll(".faq-question").forEach((q) => q.classList.remove("open"));
      document.querySelectorAll(".faq-answer").forEach((a) => (a.style.display = "none"));

      // Abre o clicado se estava fechado
      if (!isOpen) {
        btn.classList.add("open");
        answer.style.display = "block";
      }
    });
  });

  // === MENU CATEGORIES (data/categories 1.json) ===
  fetch("data/categories 1.json")
    .then((res) => res.json())
    .then((json) => {
      const categoryList = document.getElementById("category-list");
      json.data.forEach((cat) => {
        const div = document.createElement("div");
        div.className = "card category-card";
        div.innerHTML = `
          <div class="category-image" style="background-image: url('${cat.imageUrl}')">
            <div class="category-overlay">
              <h4>${cat.category.toUpperCase()}</h4>
              <p>From <strong>${cat.currency}${cat.priceFrom}</strong></p>
              <button>Order Now</button>
            </div>
          </div>
        `;
        categoryList.appendChild(div);
      });
    })
    .catch((err) => console.error("Failed to load categories", err));

  // === PRODUCT SUGGESTIONS (data/products 1.json) ===
  fetch("data/products 1.json")
    .then((res) => res.json())
    .then((json) => {
      const suggestList = document.getElementById("suggest-list");
      json.data.forEach((item) => {
        const card = document.createElement("div");
        card.className = "card product-card";
        card.innerHTML = `
          <div class="discount-badge">-${item.discountPercent}%</div>
          <img src="${item.imageUrl}" alt="${item.name}" />
          <div class="card-body">
            <div class="rating">⭐ ${item.rating} | ${item.reviews} reviews</div>
            <h4>${item.name}</h4>
            <p>${item.description}</p>
            <div class="price">
              <del>$${item.originalPrice.toFixed(2)}</del>
              <strong>$${item.discountedPrice.toFixed(2)}</strong>
            </div>
          </div>
        `;
        suggestList.appendChild(card);
      });
    })
    .catch((err) => console.error("Failed to load products", err));

  // === MOBILE MENU TOGGLE ===
  const mobileIcon = document.getElementById("mobile-menu-icon");
  const mobileNav = document.getElementById("mobile-nav");

  if (mobileIcon && mobileNav) {
    mobileIcon.addEventListener("click", () => {
      mobileNav.style.display = mobileNav.style.display === "flex" ? "none" : "flex";
    });
  }
});
