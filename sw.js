const CACHE_NAME = 'steffi-rezeptewelt-v10';
const APP_SHELL = ['./', './index.html', './styles.css?v=10', './app.js?v=10', './manifest.webmanifest', './icon.svg', './data/recipes.json'];
const NETWORK_FIRST_PATHS = new Set(['/','/index.html','/styles.css','/app.js','/data/recipes.json']);

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)));
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))));
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  const requestUrl = new URL(event.request.url);
  if (requestUrl.pathname.endsWith('/sw.js')) return;
  const scopePath = new URL('./', self.location).pathname;
  const relativePath = requestUrl.pathname.startsWith(scopePath) ? '/' + requestUrl.pathname.slice(scopePath.length) : requestUrl.pathname;
  if (NETWORK_FIRST_PATHS.has(relativePath)) {
    event.respondWith(fetch(event.request).then((response) => {
      const copy = response.clone();
      caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
      return response;
    }).catch(() => caches.match(event.request).then((cached) => cached || caches.match('./index.html'))));
    return;
  }
  event.respondWith(caches.match(event.request).then((cached) => cached || fetch(event.request).then((response) => {
    const copy = response.clone();
    caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
    return response;
  }).catch(() => caches.match('./index.html'))));
});

