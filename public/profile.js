/* ── Eurotex Custom Dialogs (Never show browser says) ───── */
let profileDialogResolve = null;

function ensureProfileDialogDOM() {
  let modal = document.getElementById("eurotexCustomConfirmModal");
  if (!modal) {
    modal = document.createElement("div");
    modal.className = "modal-overlay custom-confirm-overlay";
    modal.id = "eurotexCustomConfirmModal";
    modal.style.display = "none";
    modal.style.zIndex = "9999999";
    modal.onclick = function (e) {
      if (e.target === modal) closeProfileDialog(false);
    };
    modal.innerHTML = `
      <div class="modal-dialog custom-confirm-dialog" role="dialog" aria-modal="true">
        <div class="custom-confirm-card">
          <div class="custom-confirm-icon-wrap" id="customConfirmIconWrap">
            <span class="custom-confirm-icon" id="customConfirmIcon">⚠️</span>
          </div>
          <h3 class="custom-confirm-title" id="customConfirmTitle">Tasdiqlash</h3>
          <p class="custom-confirm-message" id="customConfirmMessage">
            Haqiqatan ham ushbu amalni bajarmoqchimisiz?
          </p>
          <div class="custom-confirm-actions" id="customConfirmActions">
            <button type="button" class="btn-confirm-cancel" id="customConfirmCancelBtn" onclick="closeProfileDialog(false)">
              Bekor qilish
            </button>
            <button type="button" class="btn-confirm-accept" id="customConfirmAcceptBtn" onclick="closeProfileDialog(true)">
              Ha, tasdiqlayman
            </button>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
  }
  return modal;
}

function closeProfileDialog(result) {
  const modal = document.getElementById("eurotexCustomConfirmModal");
  if (modal) {
    modal.classList.remove("active");
    setTimeout(() => {
      modal.style.display = "none";
    }, 200);
  }
  if (typeof profileDialogResolve === "function") {
    const fn = profileDialogResolve;
    profileDialogResolve = null;
    fn(result);
  }
}

window.closeProfileDialog = closeProfileDialog;

function eurotexConfirm(message, title = "Tasdiqlash", options = {}) {
  return new Promise((resolve) => {
    profileDialogResolve = resolve;
    const modal = ensureProfileDialogDOM();
    const titleEl = document.getElementById("customConfirmTitle");
    const msgEl = document.getElementById("customConfirmMessage");
    const iconEl = document.getElementById("customConfirmIcon");
    const iconWrap = document.getElementById("customConfirmIconWrap");
    const cancelBtn = document.getElementById("customConfirmCancelBtn");
    const acceptBtn = document.getElementById("customConfirmAcceptBtn");

    const isDanger =
      options.confirmColor === "danger" ||
      (typeof message === "string" &&
        (message.toLowerCase().includes("o'chirish") ||
          message.toLowerCase().includes("tugat") ||
          message.toLowerCase().includes("delete")));

    if (titleEl) titleEl.textContent = title;
    if (msgEl) msgEl.textContent = message;
    if (iconEl) iconEl.textContent = options.icon || (isDanger ? "🗑️" : "⚠️");
    if (cancelBtn) {
      cancelBtn.style.display = "block";
      cancelBtn.textContent = options.cancelText || "Bekor qilish";
    }
    if (acceptBtn) {
      acceptBtn.textContent = options.confirmText || (isDanger ? "Ha, o'chirish" : "Ha, tasdiqlayman");
      acceptBtn.style.background = isDanger
        ? "linear-gradient(135deg, #ef4444 0%, #b91c1c 100%)"
        : "linear-gradient(135deg, #7000ff 0%, #00f2fe 100%)";
    }
    if (iconWrap) {
      iconWrap.style.background = isDanger ? "rgba(239, 68, 68, 0.15)" : "rgba(245, 158, 11, 0.15)";
    }

    modal.style.display = "flex";
    setTimeout(() => modal.classList.add("active"), 10);
  });
}

function eurotexAlert(message, title = "Eurotex Kids") {
  return new Promise((resolve) => {
    profileDialogResolve = resolve;
    const modal = ensureProfileDialogDOM();
    const titleEl = document.getElementById("customConfirmTitle");
    const msgEl = document.getElementById("customConfirmMessage");
    const iconEl = document.getElementById("customConfirmIcon");
    const iconWrap = document.getElementById("customConfirmIconWrap");
    const cancelBtn = document.getElementById("customConfirmCancelBtn");
    const acceptBtn = document.getElementById("customConfirmAcceptBtn");

    if (titleEl) titleEl.textContent = title;
    if (msgEl) msgEl.textContent = message;
    if (iconEl) iconEl.textContent = "ℹ️";
    if (cancelBtn) cancelBtn.style.display = "none";
    if (acceptBtn) {
      acceptBtn.textContent = "Tushundim";
      acceptBtn.style.background = "linear-gradient(135deg, #7000ff 0%, #00f2fe 100%)";
    }
    if (iconWrap) iconWrap.style.background = "rgba(112, 0, 255, 0.15)";

    modal.style.display = "flex";
    setTimeout(() => modal.classList.add("active"), 10);
  });
}

// Guarantee native browser alert never shows "eurotexkids.uz says"
window.alert = function (msg) {
  eurotexAlert(String(msg || ""));
};

/* ── Theme ──────────────────────────────────────────────── */
const html = document.documentElement;
const themeBtn = document.getElementById("themeToggle");
const saved = localStorage.getItem("theme") || "light";
html.setAttribute("data-theme", saved);
if (themeBtn) {
  themeBtn.textContent = saved === "dark" ? "☀️" : "🌙";
  themeBtn.addEventListener("click", () => {
    const next = html.getAttribute("data-theme") === "dark" ? "light" : "dark";
    html.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    themeBtn.textContent = next === "dark" ? "☀️" : "🌙";
  });
}

/* ── Get email from URL ──────────────────────────────────── */
const params = new URLSearchParams(window.location.search);
const email = params.get("email");
const googleToken = params.get("googleToken");

if (googleToken && email) {
  localStorage.setItem("rememberToken", googleToken);
  localStorage.setItem("userEmail", email);
  // Strip googleToken from URL
  params.delete("googleToken");
  const cleanUrl =
    window.location.pathname +
    (params.toString() ? "?" + params.toString() : "");
  window.history.replaceState({}, document.title, cleanUrl);
}

if (!email) {
  window.location.href = "/";
}

/* ── DOM ─────────────────────────────────────────────────── */
const loadingEl = document.getElementById("profileLoading");
const navItems = document.querySelectorAll(".nav-item");
const tabs = document.querySelectorAll(".tab-content");

let profileData = null;

/* ── Load Profile ────────────────────────────────────────── */
async function loadProfile() {
  loadingEl.style.display = "flex";
  try {
    const sessionToken =
      localStorage.getItem("rememberToken") ||
      sessionStorage.getItem("rememberToken") ||
      null;
    const r = await fetch(
      `/users/profile?email=${encodeURIComponent(email)}&sessionToken=${encodeURIComponent(sessionToken)}`,
    );
    if (!r.ok) {
      window.location.href = "/";
      return;
    }
    profileData = await r.json();
    renderProfile(profileData);
  } catch {
    window.location.href = "/";
  } finally {
    loadingEl.style.display = "none";
    showTab("overview");
  }
}

/* ── Render Profile ──────────────────────────────────────── */
function renderProfile(data) {
  // ── Guest Banner ──────────────────────────────────────
  const guestBanner = document.getElementById("guestBanner");
  if (data.isGuest && guestBanner) {
    guestBanner.style.display = "flex";

    // Wire up banner buttons
    const guestRegisterBtn = document.getElementById("guestRegisterBtn");
    const guestGoogleBtn = document.getElementById("guestGoogleBtn");
    if (guestRegisterBtn) {
      guestRegisterBtn.addEventListener("click", () => {
        localStorage.removeItem("rememberToken");
        sessionStorage.removeItem("rememberToken");
        localStorage.removeItem("userEmail");
        window.location.href = "/";
      });
    }
    if (guestGoogleBtn) {
      guestGoogleBtn.addEventListener("click", () => {
        localStorage.removeItem("rememberToken");
        sessionStorage.removeItem("rememberToken");
        localStorage.removeItem("userEmail");
        window.location.href = "/users/auth/google";
      });
    }
  }

  // Overview
  const avatarEl = document.getElementById("avatarEl");
  avatarEl.textContent = data.isGuest ? "👤" : data.email[0].toUpperCase();

  document.getElementById("profileEmail").textContent = data.isGuest
    ? "Mehmon foydalanuvchi"
    : data.email;
  document.getElementById("profileJoined").textContent =
    "Ro'yxatdan o'tgan: " +
    new Date(data.createdAt).toLocaleDateString("uz-UZ", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  const tgStatus = document.getElementById("tgStatus");
  tgStatus.textContent = data.telegramLinked
    ? "✅ Telegram ulangan"
    : "⚠️ Telegram ulanmagan";
  tgStatus.className =
    "badge " + (data.telegramLinked ? "badge-green" : "badge-gray");

  const tgCard = document.getElementById("telegramSecurityCard");
  if (tgCard) tgCard.style.display = "block";
  if (tgStatus) tgStatus.style.display = data.isGuest ? "none" : "inline-block";

  // Disable Telegram card for guests
  if (data.isGuest && tgCard) {
    tgCard.style.opacity = "0.45";
    tgCard.style.pointerEvents = "none";
    tgCard.title = "Mehmon foydalanuvchilar Telegram ulay olmaydi";
  }

  document.getElementById("statSessions").textContent = data.sessions.length;
  document.getElementById("statLogs").textContent = data.loginLogs.length;

  // Sessions
  const sessionsList = document.getElementById("sessionsList");
  sessionsList.innerHTML = "";
  if (!data.sessions.length) {
    sessionsList.innerHTML =
      '<p class="muted" style="text-align:center;padding:20px">Faol sessiyalar yo\'q</p>';
  } else {
    data.sessions.forEach((s) => {
      const item = document.createElement("div");
      item.className = "list-item";
      item.innerHTML = `
                <div class="list-item-left">
                    <div class="list-icon">${getDeviceIcon(s.device)}</div>
                    <div>
                        <h4>${s.device || "Desktop"}</h4>
                        <p>${s.browser} · ${s.os}</p>
                        <p>📍 ${s.ip} · ${formatDate(s.createdAt)}</p>
                    </div>
                </div>
                <button class="remove-btn" data-id="${s._id}">O'chirish</button>`;
      sessionsList.appendChild(item);
    });

    sessionsList.querySelectorAll(".remove-btn").forEach((btn) => {
      btn.addEventListener("click", () => removeSession(btn.dataset.id));
    });
  }

  // Logs
  const logsList = document.getElementById("logsList");
  logsList.innerHTML = "";
  if (!data.loginLogs.length) {
    logsList.innerHTML =
      '<p class="muted" style="text-align:center;padding:20px">Kirish tarixi yo\'q</p>';
  } else {
    data.loginLogs.forEach((l) => {
      const item = document.createElement("div");
      item.className = "list-item";
      const dotClass =
        l.status === "success"
          ? "dot-success"
          : l.status === "blocked"
            ? "dot-blocked"
            : "dot-failed";
      const statusText =
        l.status === "success"
          ? "Muvaffaqiyatli"
          : l.status === "blocked"
            ? "Bloklangan"
            : "Noto'g'ri kod";
      item.innerHTML = `
                <div class="list-item-left">
                    <div class="list-icon">${getDeviceIcon(l.device)}</div>
                    <div>
                        <h4>${statusText}</h4>
                        <p>${l.browser} · ${l.os}</p>
                        <p>📍 ${l.ip} · ${formatDate(l.createdAt)}</p>
                    </div>
                </div>
                <span class="status-dot ${dotClass}"></span>`;
      logsList.appendChild(item);
    });
  }

  // Security tab
  const tgSecurityStatus = document.getElementById("tgSecurityStatus");
  const btnLinkTgProfile = document.getElementById("btnLinkTgProfile");
  if (data.telegramLinked) {
    tgSecurityStatus.textContent = "✅ Ulangan — kodlar Telegramga ketadi";
    btnLinkTgProfile.textContent = "Uzish";
    btnLinkTgProfile.className = "btn danger-btn small-btn";
  } else {
    tgSecurityStatus.textContent = "⚠️ Ulanmagan — kodlar emailga ketadi";
    btnLinkTgProfile.textContent = "Ulash";
    btnLinkTgProfile.className = "btn btn-primary small-btn";
  }
}

/* ── Remove Session ──────────────────────────────────────── */
async function removeSession(sessionId) {
  const ok = await eurotexConfirm("Bu qurilmani o'chirishni xohlaysizmi?", "Qurilmani o'chirish", {
    confirmText: "Ha, o'chirish",
    confirmColor: "danger",
    icon: "📱",
  });
  if (!ok) return;
  try {
    const sessionToken =
      localStorage.getItem("rememberToken") ||
      sessionStorage.getItem("rememberToken") ||
      null;
    const r = await fetch("/users/remove-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, sessionId, sessionToken }),
    });
    if (r.ok) {
      loadProfile(); // Reload
    }
  } catch {}
}

/* ── Tab Navigation ──────────────────────────────────────── */
navItems.forEach((btn) => {
  btn.addEventListener("click", () => {
    navItems.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    showTab(btn.dataset.tab);
  });
});

function showTab(tabName) {
  tabs.forEach((t) => (t.style.display = "none"));
  const el = document.getElementById("tab-" + tabName);
  if (el) el.style.display = "block";
}

/* ── Logout ──────────────────────────────────────────────── */
document.getElementById("btnLogout").addEventListener("click", () => {
  localStorage.removeItem("rememberToken");
  sessionStorage.removeItem("rememberToken");
  localStorage.removeItem("userEmail");
  window.location.href = "/";
});

/* ── Logout All Sessions ─────────────────────────────────── */
document.getElementById("btnLogoutAll").addEventListener("click", async () => {
  const ok = await eurotexConfirm("Barcha boshqa sessiyalarni tugatmoqchimisiz?", "Sessiyalarni tugatish", {
    confirmText: "Ha, tugatish",
    confirmColor: "danger",
    icon: "🔒",
  });
  if (!ok) return;
  if (!profileData) return;
  // Remove each session
  const sessionToken =
    localStorage.getItem("rememberToken") ||
    sessionStorage.getItem("rememberToken") ||
    null;
  const ids = profileData.sessions.map((s) => s._id);
  for (const id of ids) {
    await fetch("/users/remove-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, sessionId: id, sessionToken }),
    });
  }
  localStorage.removeItem("rememberToken");
  sessionStorage.removeItem("rememberToken");
  localStorage.removeItem("userEmail");
  window.location.href = "/";
});

/* ── Link/Unlink Telegram ────────────────────────────────── */
document
  .getElementById("btnLinkTgProfile")
  .addEventListener("click", async () => {
    try {
      const sessionToken =
        localStorage.getItem("rememberToken") ||
        sessionStorage.getItem("rememberToken") ||
        null;

      if (profileData && profileData.telegramLinked) {
        // Disconnect Telegram (Uzish)
        const ok = await eurotexConfirm("Telegram ulanishini uzishni xohlaysizmi?", "Telegram ulanishini uzish", {
          confirmText: "Ha, uzish",
          confirmColor: "warning",
          icon: "✈️",
        });
        if (!ok) return;
        const r = await fetch("/users/telegram-unlink", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, sessionToken }),
        });
        const d = await r.json();
        if (!r.ok) {
          alert(
            "Xatolik: " +
              (d.message ||
                "Telegram ulanishini uzish muvaffaqiyatsiz bo'ldi."),
          );
          return;
        }
        loadProfile(); // Reload
      } else {
        // Link Telegram (Ulash)
        const r = await fetch("/users/telegram-link", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, sessionToken }),
        });
        const d = await r.json();
        if (!r.ok) {
          alert(
            "Xatolik: " +
              (d.message ||
                "Telegram verification havolasini olish muvaffaqiyatsiz bo'ldi."),
          );
          return;
        }
        if (d.link) window.open(d.link, "_blank");
      }
    } catch {
      alert("Server bilan bog'lanishda xatolik yuz berdi.");
    }
  });

/* ── Helpers ─────────────────────────────────────────────── */
function formatDate(dateStr) {
  if (!dateStr) return "—";
  return new Date(dateStr).toLocaleString("uz-UZ", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function getDeviceIcon(device) {
  if (!device) return "💻";
  const d = device.toLowerCase();
  if (
    d.includes("mobile") ||
    d.includes("phone") ||
    d.includes("iphone") ||
    d.includes("android")
  )
    return "📱";
  if (d.includes("tablet") || d.includes("ipad")) return "📟";
  return "💻";
}

/* ── Init ────────────────────────────────────────────────── */
loadProfile();

// ── Native Camera QR Scanner Logic ────────────────────────
const qrScanBtn = document.getElementById("qrScanBtn");
const qrFileInput = document.getElementById("qrFileInput");

if (qrScanBtn && qrFileInput) {
  qrScanBtn.addEventListener("click", () => {
    qrFileInput.click();
  });

  qrFileInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (event) {
      const img = new Image();
      img.onload = function () {
        // Draw image to off-screen canvas to extract pixel data
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        if (typeof jsQR === "undefined") {
          alert(
            "QR Code kutubxonasi yuklanmagan. Iltimos, sahifani yangilang.",
          );
          qrFileInput.value = "";
          return;
        }

        const code = jsQR(imageData.data, canvas.width, canvas.height, {
          inversionAttempts: "dontInvert",
        });

        if (code && code.data) {
          const sessionToken =
            localStorage.getItem("rememberToken") ||
            sessionStorage.getItem("rememberToken");
          if (!sessionToken) {
            alert("Sessiya topilmadi. Tizimga qayta kiring.");
            window.location.href = "/";
            return;
          }

          // Authorize the dynamic session token read from QR code
          fetch("/users/qr-authorize", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ token: code.data, sessionToken }),
          })
            .then((res) => res.json())
            .then((data) => {
              alert(data.message || "QR-kod muvaffaqiyatli tasdiqlandi!");
            })
            .catch((err) => {
              console.error("QR Auth Error:", err);
              alert("Ulanishda xatolik yuz berdi!");
            });
        } else {
          alert(
            "Tasvirdan QR-kod topilmadi. Iltimos, yorug'roq joyda yaqinroqdan suratga oling.",
          );
        }
        // Reset file input value so same file can be triggered again
        qrFileInput.value = "";
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
  });
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js?v=3")
      .then((reg) => {
        reg.update();
      })
      .catch(() => {});
  });
}

/* ════════════════════════════════════════════════════════════════════
   FEATURE 12 — IP Location + Leaflet.js xaritasi
   ════════════════════════════════════════════════════════════════════ */
(function initIPLocationMap() {
  const mapDiv = document.getElementById("ipLeafletMap");
  const ipBadge = document.getElementById("ipBadge");
  const countryBdg = document.getElementById("ipCountryBadge");
  const cityBdg = document.getElementById("ipCityBadge");
  const ispBdg = document.getElementById("ipIspBadge");
  if (!mapDiv || typeof L === "undefined") return;

  let leafletMap = null;

  async function fetchAndRender() {
    try {
      const res = await fetch(
        "https://ip-api.com/json/?fields=status,country,regionName,city,isp,lat,lon,query",
      );
      const data = await res.json();

      if (data.status !== "success") {
        if (ipBadge) ipBadge.textContent = "📍 Joylashuv aniqlanmadi";
        return;
      }

      if (ipBadge) ipBadge.textContent = `🌐 ${data.query}`;
      if (countryBdg) countryBdg.textContent = `🏳️ ${data.country}`;
      if (cityBdg) cityBdg.textContent = `🏙️ ${data.city}, ${data.regionName}`;
      if (ispBdg) ispBdg.textContent = `📡 ${data.isp}`;

      const lat = data.lat;
      const lon = data.lon;

      // Init Leaflet map
      leafletMap = L.map("ipLeafletMap", {
        center: [lat, lon],
        zoom: 10,
        zoomControl: false,
        attributionControl: false,
        dragging: true,
        scrollWheelZoom: false,
      });

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 18,
      }).addTo(leafletMap);

      // Custom pulse marker
      const pulseIcon = L.divIcon({
        className: "",
        html: `<div style="
                    width:18px;height:18px;
                    background:rgba(112,0,255,0.85);
                    border:3px solid #fff;
                    border-radius:50%;
                    box-shadow:0 0 0 6px rgba(112,0,255,0.25),0 4px 12px rgba(0,0,0,0.3);
                    animation: markerPulse 1.5s ease-in-out infinite;
                "></div>
                <style>@keyframes markerPulse{0%,100%{box-shadow:0 0 0 6px rgba(112,0,255,0.25),0 4px 12px rgba(0,0,0,0.3);}50%{box-shadow:0 0 0 12px rgba(112,0,255,0.08),0 4px 12px rgba(0,0,0,0.3);}}</style>`,
        iconSize: [18, 18],
        iconAnchor: [9, 9],
      });

      L.marker([lat, lon], { icon: pulseIcon })
        .addTo(leafletMap)
        .bindPopup(`<b>${data.city}</b><br>${data.country}`)
        .openPopup();
    } catch (err) {
      console.warn("IP location fetch failed:", err);
      if (ipBadge) ipBadge.textContent = "📍 Tarmoq xatosi";
    }
  }

  // Only init when overview tab is shown
  const overviewTab = document.getElementById("tab-overview");
  const observer = new MutationObserver(() => {
    if (overviewTab && overviewTab.style.display !== "none" && !leafletMap) {
      fetchAndRender();
    }
  });
  if (overviewTab) {
    observer.observe(overviewTab, {
      attributes: true,
      attributeFilter: ["style"],
    });
    // Also check immediately in case already visible
    if (overviewTab.style.display !== "none") fetchAndRender();
  }
})();

/* ════════════════════════════════════════════════════════════════════
   FEATURE 5 — Session Inactivity Warning (1 daqiqa muddati qolsa)
   ════════════════════════════════════════════════════════════════════ */
(function initSessionExpiryWarning() {
  const overlay = document.getElementById("sessionWarningOverlay");
  const countdownEl = document.getElementById("warnCountdown");
  const btnStay = document.getElementById("btnStayLoggedIn");
  const btnLeave = document.getElementById("btnLeaveNow");
  if (!overlay) return;

  const WARN_BEFORE_MS = 60 * 1000; // 60 seconds before expiry
  const INACTIVITY_MS = 25 * 60 * 1000; // warn after 25min of inactivity
  let warningShown = false;
  let countdownTimer = null;
  let inactivityTimer = null;
  let countdownSecs = 60;

  function showWarning() {
    if (warningShown) return;
    warningShown = true;
    overlay.classList.remove("hidden");
    countdownSecs = 60;
    if (countdownEl) countdownEl.textContent = countdownSecs;

    countdownTimer = setInterval(() => {
      countdownSecs--;
      if (countdownEl) countdownEl.textContent = countdownSecs;
      if (countdownSecs <= 0) {
        clearInterval(countdownTimer);
        doLogout();
      }
    }, 1000);
  }

  function dismissWarning() {
    overlay.classList.add("hidden");
    warningShown = false;
    clearInterval(countdownTimer);
    resetInactivityTimer();
  }

  // Account Deletion Modal
  const deleteOverlay = document.getElementById("deleteAccountOverlay");
  const btnDeleteAccount = document.getElementById("btnDeleteAccount");
  const btnConfirmDelete = document.getElementById("btnConfirmDeleteAccount");
  const btnCancelDelete = document.getElementById("btnCancelDeleteAccount");

  if (btnDeleteAccount && deleteOverlay) {
    btnDeleteAccount.addEventListener("click", () => {
      deleteOverlay.classList.remove("hidden");
    });
  }

  if (btnCancelDelete && deleteOverlay) {
    btnCancelDelete.addEventListener("click", () => {
      deleteOverlay.classList.add("hidden");
    });
  }

  if (btnConfirmDelete && deleteOverlay) {
    btnConfirmDelete.addEventListener("click", async () => {
      try {
        const token =
          localStorage.getItem("rememberToken") ||
          sessionStorage.getItem("rememberToken");
        const r = await fetch("/users/delete-account", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, token }),
        });
        const d = await r.json();
        if (r.ok) {
          localStorage.clear();
          sessionStorage.clear();
          window.location.href = "/";
        } else {
          alert(d.message || "Xatolik yuz berdi!");
        }
      } catch (err) {
        alert("Server bilan bog'lanishda xatolik!");
      }
    });
  }

  function doLogout() {
    clearInterval(countdownTimer);
    localStorage.removeItem("rememberToken");
    sessionStorage.removeItem("rememberToken");
    localStorage.removeItem("userEmail");
    window.location.href = "/";
  }

  function resetInactivityTimer() {
    clearTimeout(inactivityTimer);
    inactivityTimer = setTimeout(showWarning, INACTIVITY_MS);
  }

  // Start tracking
  resetInactivityTimer();

  // Reset on any user activity
  ["mousemove", "keydown", "click", "scroll", "touchstart"].forEach((ev) => {
    document.addEventListener(
      ev,
      () => {
        if (!warningShown) resetInactivityTimer();
      },
      { passive: true },
    );
  });

  if (btnStay) {
    btnStay.addEventListener("click", dismissWarning);
  }
  if (btnLeave) {
    btnLeave.addEventListener("click", doLogout);
  }
})();
