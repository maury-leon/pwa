self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
    // Esto es lo que Chrome necesita para habilitar el botón de instalar
    event.respondWith(fetch(event.request));
});
