const FILES_TO_CACHE = ['/', '/index.html', '/index.js', 'style.css', 'db.js','icons/icon-182x192.png', '/icons/icon-512x512.png']

const CACHE_NAME = 'static-cache-v2'
const DATA_CACHE_NAME = 'data-cache-v1'

//install

self.addEventListener('install', e => {
    e.waitUntill(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('your files were pre-cached successfully')
                return cache.addAll(FILES_TO_CACHE)
            })
    )
    self.skipWaiting()
})

