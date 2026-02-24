// 安裝 Service Worker
self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
});

// 攔截網路請求，確保符合 PWA 條件
self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request).catch(() => new Response('Offline')));
});