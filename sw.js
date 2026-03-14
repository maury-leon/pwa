// sw.js - Service Worker compatible con PWA
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  // Responde con la petición normal del navegador
  event.respondWith(fetch(event.request));
});
