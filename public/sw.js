// Eurotex Fresh Service Worker with Branded Offline Fallback
const OFFLINE_HTML = `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Oflayn Rejim - Eurotex Kids</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; display: flex; align-items: center; justify-content: center; min-height: 100vh; margin: 0; background: #0f172a; color: #f8fafc; text-align: center; padding: 20px; box-sizing: border-box; }
    .card { background: #1e293b; padding: 32px 24px; border-radius: 16px; max-width: 420px; box-shadow: 0 10px 30px rgba(0,0,0,0.5); border: 1px solid rgba(255,255,255,0.08); }
    .icon { font-size: 48px; margin-bottom: 12px; }
    h1 { color: #f59e0b; font-size: 22px; margin: 0 0 10px 0; }
    p { color: #94a3b8; font-size: 14px; line-height: 1.6; margin: 0 0 20px 0; }
    .btn { background: linear-gradient(135deg, #88001b 0%, #5c0018 100%); color: #ffffff; border: none; padding: 12px 24px; border-radius: 10px; font-weight: 700; font-size: 15px; cursor: pointer; box-shadow: 0 4px 15px rgba(136,0,27,0.4); text-decoration: none; display: inline-block; }
  </style>
</head>
<body>
  <div class="card">
    <div class="icon">📶</div>
    <h1>Internet bilan aloqa uzildi</h1>
    <p>Hozirda oflayn rejimdasiz. Internet tarmog'iga ulangach, quyidagi tugma orqali sahifani yangilang.</p>
    <button class="btn" onclick="window.location.reload()">🔄 Qayta urinish</button>
  </div>
</body>
</html>`;

const CACHE_NAME = "eurotex-v6-precache";
const CRITICAL_ASSETS = [
  "/style.css?v=331.0.0",
  "/images/eurotex-logo.png",
  "/manifest.json",
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(CRITICAL_ASSETS).catch((err) => {
        console.warn("SW precache partial warning:", err);
      });
    }),
  );
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)),
      ),
    ),
  );
  self.clients.claim();
});

self.addEventListener("fetch", (e) => {
  if (e.request.mode === "navigate") {
    e.respondWith(
      fetch(e.request).catch(() => {
        return new Response(OFFLINE_HTML, {
          headers: { "Content-Type": "text/html; charset=utf-8" },
        });
      }),
    );
    return;
  }

  const url = new URL(e.request.url);
  // Network-first for scripts, dynamic data, and uploads to guarantee fresh updates
  if (
    url.pathname.endsWith(".js") ||
    url.pathname.startsWith("/api") ||
    url.pathname.startsWith("/products") ||
    url.pathname.startsWith("/users") ||
    url.pathname.startsWith("/images/uploads")
  ) {
    e.respondWith(
      fetch(e.request).catch(() => caches.match(e.request))
    );
    return;
  }

  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {
      if (cachedResponse) return cachedResponse;
      return fetch(e.request).catch(() => null);
    }),
  );
});
