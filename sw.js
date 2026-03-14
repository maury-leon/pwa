const CACHE_NAME = 'gcj-v1';
self.addEventListener('install', (e) => {
    console.log('SW instalado');
    self.skipWaiting();
});
self.addEventListener('fetch', (e) => {
    e.respondWith(fetch(e.request));
});
