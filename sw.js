self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
    // Necesario para activar la instalación
    event.respondWith(fetch(event.request));
});
