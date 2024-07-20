const CACHE_NAME = 'one-more-light-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/manifest.json',
    '/path/to/your/icon-192x192.png',
    '/path/to/your/icon-512x512.png',
    'https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css',
    'https://unpkg.com/react/umd/react.production.min.js',
    'https://unpkg.com/react-dom/umd/react-dom.production.min.js',
    'https://unpkg.com/@babel/standalone/babel.min.js',
    'https://code.jquery.com/jquery-3.6.0.min.js',
    'https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                return response || fetch(event.request);
            })
    );
});
