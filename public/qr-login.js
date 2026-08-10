(function () {
  /* ── QR Login Block (generates QR code → phone scans it) ─────────── */
  var btnQrLogin = document.getElementById("btnQrLogin");
  var qrLoginBlock = document.getElementById("qrLoginBlock");
  var btnBackFromQr = document.getElementById("btnBackFromQr");
  var qrCodeImg = document.getElementById("qrCodeImg");
  var qrSpinner = document.getElementById("qrSpinner");
  var qrStatusText = document.getElementById("qrStatusText");
  var normalEmailForm = document.getElementById("normalEmailForm");
  var btnQrRefresh = document.getElementById("btnQrRefresh");
  var qrTimerRow = document.getElementById("qrTimerRow");
  var qrTimerText = document.getElementById("qrTimerText");
  var qrExpiredOverlay = document.getElementById("qrExpiredOverlay");

  var qrPollInterval = null;
  var qrTimerInterval = null;
  var qrSessionToken = null;
  var QR_DURATION = 60; // seconds

  /* ── Show QR Block ───────────────────────────────────────────────── */
  if (btnQrLogin && qrLoginBlock && normalEmailForm) {
    btnQrLogin.addEventListener("click", function () {
      normalEmailForm.style.display = "none";
      qrLoginBlock.style.display = "block";
      generateQrCode();
    });
  }

  /* ── Back button ─────────────────────────────────────────────────── */
  if (btnBackFromQr && normalEmailForm && qrLoginBlock) {
    btnBackFromQr.addEventListener("click", function () {
      qrLoginBlock.style.display = "none";
      normalEmailForm.style.display = "block";
      stopAll();
    });
  }

  /* ── Refresh button (after expiry) ───────────────────────────────── */
  if (btnQrRefresh) {
    btnQrRefresh.addEventListener("click", function () {
      generateQrCode();
    });
  }

  /* ── Generate QR code + start timer + start polling ─────────────── */
  async function generateQrCode() {
    if (!qrCodeImg || !qrSpinner) return;

    // Reset UI
    stopAll();

    qrSpinner.style.display = "flex";
    qrCodeImg.style.display = "none";
    if (qrExpiredOverlay) qrExpiredOverlay.style.display = "none";
    if (qrTimerRow) qrTimerRow.style.display = "none";
    if (btnQrRefresh) btnQrRefresh.style.display = "none";
    if (qrTimerRow) qrTimerRow.classList.remove("urgent");
    if (qrStatusText) qrStatusText.textContent = "QR kod tayyorlanmoqda...";

    try {
      const resGen = await fetch("/users/qr-generate", { method: "POST" });
      if (!resGen.ok) throw new Error("Failed to generate token");
      const dataGen = await resGen.json();
      qrSessionToken = dataGen.token;
    } catch (e) {
      qrSpinner.style.display = "none";
      if (qrStatusText)
        qrStatusText.textContent =
          "Server bilan bog'lanishda xatolik yuz berdi";
      return;
    }

    // Build scan URL
    var loginUrl =
      window.location.origin + "/users/qr-auth?token=" + qrSessionToken;

    if (typeof QRCode === "undefined") {
      qrSpinner.style.display = "none";
      if (qrStatusText)
        qrStatusText.textContent =
          "QR kutubxonasi yuklanmadi. Sahifani yangilang.";
      return;
    }

    var tempCanvas = document.createElement("canvas");
    QRCode.toCanvas(
      tempCanvas,
      loginUrl,
      {
        width: 200,
        margin: 2,
        color: { dark: "#1a0050", light: "#ffffff" },
      },
      function (err) {
        if (err) {
          if (qrStatusText)
            qrStatusText.textContent = "QR kod yaratishda xatolik yuz berdi";
          qrSpinner.style.display = "none";
          return;
        }
        qrCodeImg.src = tempCanvas.toDataURL("image/png");
        qrCodeImg.style.display = "block";
        qrSpinner.style.display = "none";
        if (qrStatusText)
          qrStatusText.textContent = "Telefon kamerangiz bilan skanerlang";
        if (qrTimerRow) qrTimerRow.style.display = "flex";

        startQrTimer();
        startQrPolling();
      },
    );
  }

  /* ── 1-minute countdown timer ────────────────────────────────────── */
  function startQrTimer() {
    stopQrTimer();
    var remaining = QR_DURATION;
    updateTimerDisplay(remaining);

    qrTimerInterval = setInterval(function () {
      remaining--;
      updateTimerDisplay(remaining);

      // Last 15 seconds — flash red
      if (remaining <= 15 && qrTimerRow) {
        qrTimerRow.classList.add("urgent");
      }

      if (remaining <= 0) {
        stopAll();
        showExpired();
      }
    }, 1000);
  }

  function updateTimerDisplay(t) {
    if (!qrTimerText) return;
    var m = String(Math.floor(Math.max(0, t) / 60)).padStart(2, "0");
    var s = String(Math.max(0, t) % 60).padStart(2, "0");
    qrTimerText.textContent = m + ":" + s;
  }

  function stopQrTimer() {
    if (qrTimerInterval) {
      clearInterval(qrTimerInterval);
      qrTimerInterval = null;
    }
  }

  /* ── Show expired state ──────────────────────────────────────────── */
  function showExpired() {
    if (qrExpiredOverlay) qrExpiredOverlay.style.display = "flex";
    if (qrTimerRow) qrTimerRow.style.display = "none";
    if (qrStatusText)
      qrStatusText.textContent = "⏰ QR kod muddati tugadi. Yangi kod oling.";
    if (btnQrRefresh) btnQrRefresh.style.display = "inline-flex";
  }

  /* ── Poll server for scan status ─────────────────────────────────── */
  function startQrPolling() {
    stopQrPolling();
    qrPollInterval = setInterval(async function () {
      if (!qrSessionToken) return;
      try {
        var r = await fetch("/users/qr-status?token=" + qrSessionToken);
        var d = await r.json();
        if (d.status === "authorized" && d.rememberToken) {
          stopAll();
          localStorage.setItem("userEmail", d.email || "");
          localStorage.setItem("rememberToken", d.rememberToken);
          localStorage.setItem("lastEmail", d.email || "");
          window.location.href =
            "/profile.html?email=" + encodeURIComponent(d.email || "");
        } else if (d.status === "expired") {
          stopAll();
          showExpired();
        }
      } catch (e) {}
    }, 2000);
  }

  function stopQrPolling() {
    if (qrPollInterval) {
      clearInterval(qrPollInterval);
      qrPollInterval = null;
    }
  }

  function stopAll() {
    stopQrTimer();
    stopQrPolling();
    qrSessionToken = null;
  }

  window.addEventListener("beforeunload", function () {
    stopAll();
  });
})();
