self.addEventListener('install', (event) => {
  console.log('SW instalado');
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  // Sin esto, Chrome no permite la instalación
  event.respondWith(fetch(event.request));
});
