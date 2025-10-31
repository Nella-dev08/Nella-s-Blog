const canvas = document.getElementById("particle-canvas");
const ctx = canvas.getContext("2d");
let particles = [];

function resizeCanvas() {
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

for (let i = 0; i < 50; i++) {
particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 2 + 1,
    speedX: (Math.random() - 0.5) * 0.5,
    speedY: (Math.random() - 0.5) * 0.5,
});
}

function animate() {
ctx.clearRect(0, 0, canvas.width, canvas.height);
particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(120, 150, 255, 0.4)";
    ctx.fill();
    p.x += p.speedX;
    p.y += p.speedY;

    if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
    if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
});
requestAnimationFrame(animate);
}
animate();

document.addEventListener("DOMContentLoaded", () => {
  // 🔹 All special pages (hidden by default)
const pages = [
    "registration-page",
    "product-form-page",
    "software-page",
    "hardware-page",
    "cyber-page",
    "product-confirmation-page",
    "confirmation-page",
    "join-team-page",
    "join-team-confirmation-page"
];

  // 🔹 Main homepage container (Vision, Mission, etc.)
const mainContainer = document.querySelector(".Next");

  // 🔹 Helper function: hide homepage & show target page
const showPage = (pageId) => {
    if (mainContainer) mainContainer.style.display = "none";

    pages.forEach((id) => {
    const page = document.getElementById(id);
    if (page) page.style.display = "none";
    });

    const activePage = document.getElementById(pageId);
    if (activePage) {
    activePage.style.display = "block";
    window.scrollTo({ top: 0, behavior: "smooth" });
    }
};

  // 🔹 Go back home
const showHome = () => {
    if (mainContainer) mainContainer.style.display = "block";
    pages.forEach((id) => {
    const page = document.getElementById(id);
    if (page) page.style.display = "none";
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
};

  // 🔹 Hide all extra pages initially
pages.forEach((id) => {
    const page = document.getElementById(id);
    if (page) page.style.display = "none";
});

  // 🔹 “Get Started” → Registration page
const getStartedBtn = document.getElementById("get-started-btn");
if (getStartedBtn) {
    getStartedBtn.addEventListener("click", () => showPage("registration-page"));
}

// 🔹 Registration form → Confirmation page
const registrationForm = document.getElementById("registration-form");
if (registrationForm) {
    registrationForm.addEventListener("submit", (e) => {
    e.preventDefault();
    showPage("confirmation-page");
    });
}

  // 🔹 Explore Products → Product Form Page
const exploreBtn = document.getElementById("explore-products");
if (exploreBtn) {
    exploreBtn.addEventListener("click", () => showPage("product-form-page"));
}

  // 🔹 Category Cards → Category Pages
const categoryCards = document.querySelectorAll(".category-card");
categoryCards.forEach((card) => {
    card.addEventListener("click", () => {
    const category = card.dataset.category;
    if (category === "software") showPage("software-page");
    if (category === "hardware") showPage("hardware-page");
    if (category === "cyber") showPage("cyber-page");
    });
});

  // 🔹 Back Buttons → Product Form Page
const backButtons = {
    "software-back": "product-form-page",
    "hardware-back": "product-form-page",
    "cyber-back": "product-form-page",
    "confirmation-back": "product-form-page"
};

Object.entries(backButtons).forEach(([btnId, targetPage]) => {
    const btn = document.getElementById(btnId);
    if (btn)
    btn.addEventListener("click", () => showPage(targetPage));
});

  // 🔹 Product Request Forms → Product Confirmation Page
const forms = ["software-form", "hardware-form", "cyber-form"];
forms.forEach((formId) => {
    const form = document.getElementById(formId);
    if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        showPage("product-confirmation-page");
    });
    }
});

// 🔹 Join Us → Join Team Page
const joinUsBtn = document.getElementById("join-us");
if (joinUsBtn) {
    joinUsBtn.addEventListener("click", () => showPage("join-team-page"));
}

// 🔹 Join Team Form → Confirmation Page
const joinTeamForm = document.getElementById("join-team-form");
if (joinTeamForm) {
    joinTeamForm.addEventListener("submit", (e) => {
        e.preventDefault();
        showPage("join-team-confirmation-page");
    });
}

// 🔹 Confirmation → Return Home
const joinTeamBack = document.getElementById("join-team-back");
if (joinTeamBack) {
    joinTeamBack.addEventListener("click", showHome);
}

  // 🔹 Confirmation Links
const newRequest = document.getElementById("new-request");
if (newRequest) {
    newRequest.addEventListener("click", (e) => {
    e.preventDefault();
    showPage("product-form-page");
    });
}

const viewRequests = document.getElementById("view-requests");
if (viewRequests) {
    viewRequests.addEventListener("click", (e) => {
e.preventDefault();
    alert("Feature coming soon ✨");
    });
}

  // 🔹 Logo → Back Home
const logo = document.querySelector(".logo");
if (logo) logo.addEventListener("click", showHome);
});


// ====== PRELOADER FUNCTION ======
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  setTimeout(() => {
    preloader.style.opacity = "0";
    preloader.style.transition = "opacity 0.8s ease";
    setTimeout(() => (preloader.style.display = "none"), 800);
  }, 1000);
});

mainContainer.style.display = "none";
