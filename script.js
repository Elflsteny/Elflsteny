const STORE_WHATSAPP = "201110933143";

const APPLE_SVG = `<svg viewBox="0 0 384 512" width="14" height="14" fill="currentColor"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>`;

const phones = [
  {
    id: 1,
    name: "iPhone 16 Pro Max",
    brand: "Apple",
    image: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-16-pro-max.jpg",
    condition: "new",
    conditionLabel: "جديد - ضمان دولي",
    storage: "256GB / 8GB RAM",
    chip: "Apple A18 Pro",
    camera: "48MP Fusion ثلاثية",
    battery: "4685 mAh",
    price: "76,500 ج.م",
    numericPrice: 76500
  },
  {
    id: 2,
    name: "iPhone 15 Pro",
    brand: "Apple",
    image: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15-pro.jpg",
    condition: "used",
    conditionLabel: "كسر زيرو - بطارية 94%",
    storage: "256GB / 8GB RAM",
    chip: "Apple A17 Pro",
    camera: "48MP ProRAW",
    battery: "صحة بطارية 94% بالعلبة",
    price: "51,000 ج.م",
    numericPrice: 51000
  },
  {
    id: 3,
    name: "iPhone 13",
    brand: "Apple",
    image: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13.jpg",
    condition: "used",
    conditionLabel: "كسر زيرو - بطارية 90%",
    storage: "128GB / 4GB RAM",
    chip: "Apple A15 Bionic",
    camera: "12MP مزدوجة",
    battery: "صحة بطارية 90% بالعلبة",
    price: "26,500 ج.م",
    numericPrice: 26500
  },
  {
    id: 4,
    name: "Samsung Galaxy S24 Ultra",
    brand: "Samsung",
    image: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s24-ultra-5g-sm-s928-stylus.jpg",
    condition: "new",
    conditionLabel: "جديد - ضمان محلي",
    storage: "256GB / 12GB RAM",
    chip: "Snapdragon 8 Gen 3",
    camera: "200MP + AI Zoom",
    battery: "5000 mAh - 45W",
    price: "56,000 ج.م",
    numericPrice: 56000
  },
  {
    id: 5,
    name: "Samsung Galaxy A55 5G",
    brand: "Samsung",
    image: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a55.jpg",
    condition: "new",
    conditionLabel: "جديد - ضمان محلي",
    storage: "256GB / 8GB RAM",
    chip: "Exynos 1480",
    camera: "50MP OIS",
    battery: "5000 mAh - 25W",
    price: "19,800 ج.م",
    numericPrice: 19800
  },
  {
    id: 6,
    name: "Samsung S23 Ultra",
    brand: "Samsung",
    image: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s23-ultra-5g.jpg",
    condition: "used",
    conditionLabel: "كسر زيرو بحالة المصنع",
    storage: "256GB / 12GB RAM",
    chip: "Snapdragon 8 Gen 2",
    camera: "200MP + زووم 100x",
    battery: "5000 mAh بالعلبة",
    price: "38,500 ج.م",
    numericPrice: 38500
  },
  {
    id: 7,
    name: "Redmi Note 13 Pro 5G",
    brand: "Xiaomi",
    image: "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-note-13-pro-5g.jpg",
    condition: "new",
    conditionLabel: "جديد - ضمان محلي",
    storage: "256GB / 8GB RAM",
    chip: "Snapdragon 7s Gen 2",
    camera: "200MP OIS",
    battery: "5100 mAh - 67W",
    price: "15,900 ج.م",
    numericPrice: 15900
  },
  {
    id: 8,
    name: "Xiaomi 13T",
    brand: "Xiaomi",
    image: "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-13t.jpg",
    condition: "new",
    conditionLabel: "جديد - ضمان محلي",
    storage: "256GB / 12GB RAM",
    chip: "Dimensity 8200 Ultra",
    camera: "50MP Leica",
    battery: "5000 mAh - 67W",
    price: "22,400 ج.م",
    numericPrice: 22400
  },
  {
    id: 9,
    name: "Realme 12 Pro+ 5G",
    brand: "Realme",
    image: "https://fdn2.gsmarena.com/vv/bigpic/realme-12-pro-plus.jpg",
    condition: "new",
    conditionLabel: "جديد - ضمان محلي",
    storage: "512GB / 12GB RAM",
    chip: "Snapdragon 7s Gen 2",
    camera: "64MP Periscope OIS",
    battery: "5000 mAh - 67W",
    price: "21,500 ج.م",
    numericPrice: 21500
  },
  {
    id: 10,
    name: "Realme C67",
    brand: "Realme",
    image: "https://fdn2.gsmarena.com/vv/bigpic/realme-c67-4g.jpg",
    condition: "new",
    conditionLabel: "جديد - ضمان محلي",
    storage: "256GB / 8GB RAM",
    chip: "Snapdragon 685",
    camera: "108MP كاميرا رئيسية",
    battery: "5000 mAh - 33W",
    price: "8,750 ج.م",
    numericPrice: 8750
  },
  {
    id: 11,
    name: "Oppo Reno 11 5G",
    brand: "Oppo",
    image: "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno11-international.jpg",
    condition: "used",
    conditionLabel: "كسر زيرو - استعمال خفيف",
    storage: "256GB / 12GB RAM",
    chip: "Dimensity 7050",
    camera: "50MP OIS + Telephoto",
    battery: "5000 mAh - 67W",
    price: "16,200 ج.م",
    numericPrice: 16200
  },
  {
    id: 12,
    name: "Oppo A98 5G",
    brand: "Oppo",
    image: "https://fdn2.gsmarena.com/vv/bigpic/oppo-a98-5g.jpg",
    condition: "new",
    conditionLabel: "جديد - ضمان محلي",
    storage: "256GB / 8GB RAM",
    chip: "Snapdragon 695 5G",
    camera: "64MP AI",
    battery: "5000 mAh - 67W",
    price: "12,900 ج.م",
    numericPrice: 12900
  }
];

let activeFilter = "all";
let searchQuery = "";
let sortOrder = "default";
let compareList = [];
let tradeMode = "trade";

const phonesGrid = document.getElementById("phonesGrid");
const compareContainer = document.getElementById("compareContainer");
const resultsCounter = document.getElementById("resultsCounter");
const totalPhonesCount = document.getElementById("totalPhonesCount");

if (totalPhonesCount) {
  totalPhonesCount.textContent = `+${phones.length}`;
}

function getEffectiveTheme() {
  try {
    const saved = localStorage.getItem("alfalastini_theme");
    if (saved === "dark" || saved === "light") return saved;
  } catch {}
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  const iconEl = document.getElementById("themeIcon");
  const labelEl = document.getElementById("themeLabel");

  if (theme === "dark") {
    if (iconEl) iconEl.textContent = "☀️";
    if (labelEl) labelEl.textContent = "فاتح";
  } else {
    if (iconEl) iconEl.textContent = "🌙";
    if (labelEl) labelEl.textContent = "داكن";
  }
}

function initThemeToggle() {
  let currentTheme = getEffectiveTheme();
  applyTheme(currentTheme);

  const btn = document.getElementById("themeToggleBtn");
  if (btn) {
    btn.addEventListener("click", () => {
      currentTheme = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
      applyTheme(currentTheme);
      try {
        localStorage.setItem("alfalastini_theme", currentTheme);
      } catch {}
    });
  }
}

function initScrollTopButton() {
  const scrollTopBtn = document.getElementById("scrollTopBtn");
  if (!scrollTopBtn) return;

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function initWelcomeModal() {
  const modal = document.getElementById("welcomeModal");
  const closeBtn = document.getElementById("closeWelcomeBtn");
  const dismissBtn = document.getElementById("welcomeDismissBtn");
  const catalogBtn = document.getElementById("welcomeCatalogBtn");

  if (!modal) return;

  try {
    if (!sessionStorage.getItem("alfalastini_welcomed")) {
      modal.hidden = false;
    }
  } catch {
    modal.hidden = false;
  }

  const hideModal = () => {
    modal.hidden = true;
    try {
      sessionStorage.setItem("alfalastini_welcomed", "1");
    } catch {}
  };

  if (closeBtn) closeBtn.addEventListener("click", hideModal);
  if (dismissBtn) dismissBtn.addEventListener("click", hideModal);
  if (catalogBtn) catalogBtn.addEventListener("click", hideModal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) hideModal();
  });
}

function setupWhatsAppShareButtons() {
  const pageUrl = window.location.href;
  const shareText = `🍎 الفلسطيني Store (ملك التفاح) - فرع المرج القديمة\nتصفح أسعار الآيفون والموبايلات كاش، قارن بين الأجهزة، أو بدّل موبايلك القديم:\n${pageUrl}`;
  const shareUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`;

  document.querySelectorAll(".share-wa-btn").forEach(btn => {
    btn.setAttribute("href", shareUrl);
  });
}

function renderPhones() {
  let filtered = phones.filter(p => {
    const matchesFilter =
      activeFilter === "all" ||
      p.condition === activeFilter ||
      p.brand === activeFilter;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  if (sortOrder === "price-asc") {
    filtered = [...filtered].sort((a, b) => a.numericPrice - b.numericPrice);
  } else if (sortOrder === "price-desc") {
    filtered = [...filtered].sort((a, b) => b.numericPrice - a.numericPrice);
  }

  if (resultsCounter) {
    resultsCounter.textContent = `معروض ${filtered.length} من ${phones.length} جهاز`;
  }

  if (!filtered.length) {
    phonesGrid.innerHTML = `<p class="empty-msg">لا توجد أجهزة مطابقة لبحثك حالياً.</p>`;
    return;
  }

  phonesGrid.innerHTML = filtered.map((phone, index) => {
    const isChecked = compareList.includes(phone.id) ? "checked" : "";
    const isApple = phone.brand === "Apple";
    const waText = encodeURIComponent(
      `السلام عليكم الفلسطيني Store (ملك التفاح)، كنت حابب أسأل هل موبايل (${phone.name} - ${phone.storage}) متوفر حالياً في فرع المرج القديمة؟`
    );

    return `
      <article class="card" style="animation-delay: ${Math.min(index * 0.025, 0.25)}s">
        <div>
          <div class="card-top">
            <span class="badge ${phone.condition === 'new' ? 'badge-new' : 'badge-used'}">
              ${phone.conditionLabel}
            </span>
            <label class="compare-check">
              <input type="checkbox" onchange="toggleCompare(${phone.id})" ${isChecked} />
              قارن
            </label>
          </div>

          <div class="phone-visual">
            <span class="brand-pill-overlay">${isApple ? APPLE_SVG : "📱"} ${phone.brand}</span>
            <img
              src="${phone.image}"
              alt="${phone.name}"
              class="phone-img"
              loading="lazy"
              onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
            />
            <div class="phone-fallback">
              <div class="phone-icon">${isApple ? APPLE_SVG : "📱"}</div>
              <strong>${phone.name}</strong>
              <span>${phone.storage}</span>
            </div>
            <div class="watermark">الفلسطيني Store</div>
          </div>

          <h3>${phone.name}</h3>
          <div class="specs-list">
            <span>💾 ${phone.storage}</span>
            <span>⚙️ ${phone.chip}</span>
            <span>📸 ${phone.camera}</span>
            <span>🔋 ${phone.battery}</span>
          </div>
        </div>

        <div>
          <div class="price-row">
            <span class="price">${phone.price}</span>
            <span class="cash-note">سعر الكاش</span>
          </div>
          <a href="https://wa.me/${STORE_WHATSAPP}?text=${waText}" target="_blank" rel="noopener" class="btn btn-whatsapp">
            💬 اسأل عن التوفر في الفرع
          </a>
        </div>
      </article>
    `;
  }).join("");
}

function toggleCompare(id) {
  if (compareList.includes(id)) {
    compareList = compareList.filter(item => item !== id);
  } else {
    if (compareList.length >= 2) {
      compareList.shift();
    }
    compareList.push(id);
  }
  renderPhones();
  renderCompare();
}

function clearCompare() {
  compareList = [];
  renderPhones();
  renderCompare();
}

function renderCompare() {
  if (compareList.length === 0) {
    compareContainer.innerHTML = `<p class="empty-msg">لم يتم اختيار أجهزة للمقارنة بعد. اختر جهازين من القائمة بالأعلى.</p>`;
    return;
  }

  const selected = compareList.map(id => phones.find(p => p.id === id));
  const p1 = selected[0];
  const p2 = selected[1];

  let footerHTML = "";
  if (p2) {
    const diff = Math.abs(p1.numericPrice - p2.numericPrice);
    const formattedDiff = diff.toLocaleString("en-US") + " ج.م";
    const diffMessage = diff === 0
      ? `الجهازين بنفس السعر (<strong>${p1.price}</strong>)`
      : `💰 فرق السعر بين الجهازين: <strong class="price" style="font-size: 1.05rem;">${formattedDiff}</strong>`;

    footerHTML = `
      <div class="price-diff-bar">
        <span>${diffMessage}</span>
        <button type="button" onclick="clearCompare()" class="clear-compare-btn">مسح المقارنة ✕</button>
      </div>
    `;
  } else {
    footerHTML = `<p class="empty-msg" style="margin-top: 10px;">اختر جهاز ثاني من القائمة بالأعلى لحساب فرق السعر.</p>`;
  }

  compareContainer.innerHTML = `
    <table>
      <thead>
        <tr>
          <th>المواصفات</th>
          <th><img src="${p1.image}" alt="${p1.name}" class="compare-thumb" />${p1.name}</th>
          <th>${p2 ? `<img src="${p2.image}" alt="${p2.name}" class="compare-thumb" />${p2.name}` : "اختر جهاز ثاني للمقارنة"}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>الحالة</strong></td>
          <td>${p1.conditionLabel}</td>
          <td>${p2 ? p2.conditionLabel : "-"}</td>
        </tr>
        <tr>
          <td><strong>المساحة والرام</strong></td>
          <td>${p1.storage}</td>
          <td>${p2 ? p2.storage : "-"}</td>
        </tr>
        <tr>
          <td><strong>المعالج</strong></td>
          <td>${p1.chip}</td>
          <td>${p2 ? p2.chip : "-"}</td>
        </tr>
        <tr>
          <td><strong>الكاميرا</strong></td>
          <td>${p1.camera}</td>
          <td>${p2 ? p2.camera : "-"}</td>
        </tr>
        <tr>
          <td><strong>البطارية</strong></td>
          <td>${p1.battery}</td>
          <td>${p2 ? p2.battery : "-"}</td>
        </tr>
        <tr>
          <td><strong>سعر الكاش</strong></td>
          <td><strong class="price" style="font-size: 1rem;">${p1.price}</strong></td>
          <td><strong class="price" style="font-size: 1rem;">${p2 ? p2.price : "-"}</strong></td>
        </tr>
      </tbody>
    </table>
    ${footerHTML}
  `;
}

document.querySelectorAll(".tab-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    activeFilter = btn.dataset.filter;
    renderPhones();
  });
});

document.getElementById("searchInput").addEventListener("input", e => {
  searchQuery = e.target.value;
  renderPhones();
});

document.getElementById("sortSelect").addEventListener("change", e => {
  sortOrder = e.target.value;
  renderPhones();
});

const tradeTitle = document.getElementById("tradeTitle");
const tradeDesc = document.getElementById("tradeDesc");
const targetModelInput = document.getElementById("targetModel");
const tradeSubmitBtn = document.getElementById("tradeSubmitBtn");

document.querySelectorAll(".mode-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".mode-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    tradeMode = btn.dataset.mode;

    if (tradeMode === "trade") {
      tradeTitle.textContent = "بدّل موبايلك القديم بأحدث وادفع الفرق كاش";
      tradeDesc.innerHTML = `في <strong>الفلسطيني Store - ملك التفاح</strong> بنقيّم موبايلك القديم بأعلى سعر في السوق وتستلم جهازك الجديد أو كسر الزيرو فوراً بعد الفحص في فرع المرج القديمة.`;
      targetModelInput.style.display = "block";
      targetModelInput.required = true;
      tradeSubmitBtn.textContent = "💬 احسب فرق الاستبدال على واتساب";
    } else {
      tradeTitle.textContent = "عاوز تبيع موبايلك كاش فوري؟";
      tradeDesc.innerHTML = `في <strong>الفلسطيني Store - ملك التفاح</strong> بنشتري أجهزة الآيفون والأندرويد المستعملة وكسر الزيرو كاش فوراً بعد المعاينة في فرع المرج القديمة. ابعت تفاصيل جهازك للتسعير المبدئي.`;
      targetModelInput.style.display = "none";
      targetModelInput.required = false;
      tradeSubmitBtn.textContent = "💬 ابعت بيانات جهازك للتسعير كاش على واتساب";
    }
  });
});

document.getElementById("sellForm").addEventListener("submit", e => {
  e.preventDefault();
  const model = document.getElementById("sellModel").value;
  const storage = document.getElementById("sellStorage").value;
  const box = document.getElementById("sellBox").value;
  const condition = document.getElementById("sellCondition").value;
  const target = targetModelInput.value;

  let msgText = "";
  if (tradeMode === "trade") {
    msgText = `السلام عليكم الفلسطيني Store (ملك التفاح)، حابب أبدّل موبايلي في فرع المرج القديمة وعاوز أعرف فرق السعر كاش:\n- موبايلي الحالي: ${model}\n- المساحة: ${storage}\n- المشتملات: ${box}\n- الحالة: ${condition}\n- الجهاز المطلوب الاستبدال به: ${target}`;
  } else {
    msgText = `السلام عليكم الفلسطيني Store (ملك التفاح)، حابب أبيع موبايلي كاش في فرع المرج القديمة وعاوز تسعير مبدئي:\n- الموديل: ${model}\n- المساحة: ${storage}\n- المشتملات: ${box}\n- الحالة: ${condition}`;
  }

  window.open(`https://wa.me/${STORE_WHATSAPP}?text=${encodeURIComponent(msgText)}`, "_blank");
});

const verifiedReviews = [];

const reviewsGrid = document.getElementById("reviewsGrid");
const addReviewBox = document.getElementById("addReviewBox");
const toggleReviewFormBtn = document.getElementById("toggleReviewFormBtn");
const realReviewForm = document.getElementById("realReviewForm");

function escapeHTML(str) {
  return str.replace(/[&<>"']/g, m => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[m]));
}

function getStoredUserReviews() {
  try {
    return JSON.parse(localStorage.getItem("alfalastini_real_reviews") || "[]");
  } catch {
    return [];
  }
}

function renderReviews() {
  const userSubmitted = getStoredUserReviews();
  const allReviews = [...userSubmitted, ...verifiedReviews];

  if (!allReviews.length) {
    reviewsGrid.innerHTML = `
      <div class="empty-reviews-box">
        <p style="font-weight: 800; font-size: 1rem; margin-bottom: 6px;">لا توجد تقييمات منشورة في الموقع بعد</p>
        <p style="font-size: 0.88rem;">لو اشتريت أو بدّلت جهازك من فرع المرج القديمة، اضغط على <strong>"✍️ أضف تقييمك في الموقع"</strong> لمشاركة تجربتك.</p>
      </div>
    `;
    return;
  }

  reviewsGrid.innerHTML = allReviews.map(rev => {
    const starsStr = "⭐".repeat(Math.min(Math.max(Number(rev.stars) || 5, 1), 5));
    const badgeHTML = rev.verified
      ? `<span class="verified-badge">✔ تقييم موثق من الفرع</span>`
      : `<span class="verified-badge">🕒 بانتظار توثيق الفرع</span>`;

    return `
      <div class="review-card">
        <div class="review-top">
          <div class="reviewer-meta">
            <strong>${escapeHTML(rev.name)}</strong>
            ${badgeHTML}
          </div>
          <span class="stars">${starsStr}</span>
        </div>
        <p>"${escapeHTML(rev.comment)}"</p>
        <div class="review-footer">
          <span class="review-tag">${escapeHTML(rev.deal)}</span>
          <span class="review-date">${escapeHTML(rev.date)}</span>
        </div>
      </div>
    `;
  }).join("");
}

if (toggleReviewFormBtn) {
  toggleReviewFormBtn.addEventListener("click", () => {
    addReviewBox.hidden = !addReviewBox.hidden;
  });
}

if (realReviewForm) {
  realReviewForm.addEventListener("submit", e => {
    e.preventDefault();
    const newReview = {
      name: document.getElementById("revName").value.trim(),
      deal: document.getElementById("revDeal").value.trim(),
      stars: Number(document.getElementById("revStars").value),
      date: document.getElementById("revDate").value.trim(),
      comment: document.getElementById("revComment").value.trim(),
      verified: false
    };

    const existing = getStoredUserReviews();
    existing.unshift(newReview);
    localStorage.setItem("alfalastini_real_reviews", JSON.stringify(existing));

    renderReviews();
    realReviewForm.reset();
    addReviewBox.hidden = true;

    const waMsg = encodeURIComponent(
      `تقييم عميل جديد لموقع الفلسطيني Store (ملك التفاح):\n- الاسم: ${newReview.name}\n- التعامل: ${newReview.deal}\n- التقييم: ${newReview.stars}/5 نجوم\n- التاريخ: ${newReview.date}\n- الرأي: ${newReview.comment}`
    );
    window.open(`https://wa.me/${STORE_WHATSAPP}?text=${waMsg}`, "_blank");
  });
}

function updateStoreStatus() {
  const hour = new Date().getHours();
  const isOpen = hour >= 13 && hour < 24;
  const dot = document.getElementById("statusDot");
  const text = document.getElementById("statusText");

  if (isOpen) {
    dot.style.background = "#22c55e";
    text.textContent = "الفرع مفتوح الآن";
  } else {
    dot.style.background = "#ef4444";
    dot.style.animation = "none";
    text.textContent = "الفرع مغلق حالياً";
  }
}

const scrollProgress = document.getElementById("scrollProgress");
const scrollTopBtn = document.getElementById("scrollTopBtn");
let scrollTicking = false;

window.addEventListener("scroll", () => {
  if (scrollTicking) return;
  window.requestAnimationFrame(() => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = docHeight > 0 ? scrollTop / docHeight : 0;

    if (scrollProgress) {
      scrollProgress.style.transform = `scaleX(${ratio})`;
    }
    if (scrollTopBtn) {
      scrollTopBtn.classList.toggle("show", scrollTop > 400);
    }

    scrollTicking = false;
  });
  scrollTicking = true;
}, { passive: true });

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.06 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

initThemeToggle();
initScrollTopButton();
initWelcomeModal();
setupWhatsAppShareButtons();
updateStoreStatus();
renderPhones();
renderReviews();