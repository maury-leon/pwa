self.addEventListener('install', (event) => {
    console.log('SW: Instalado');
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    console.log('SW: Activado');
});

self.addEventListener('fetch', (event) => {
    // Esto es vital para que el navegador considere la web como instalable
    event.respondWith(fetch(event.request));
});
