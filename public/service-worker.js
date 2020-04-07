const FILES_TO_CACHE = ['/', '/index.html', '/index.js', 'style.css', 'db.js','icons/icon-182x192.png', '/icons/icon-512x512.png']

const CACHE_NAME = 'static-cache-v2'
const DATA_CACHE_NAME = 'data-cache-v1'

//install

self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('your files were pre-cached successfully')
                return cache.addAll(FILES_TO_CACHE)
            })
    )
    self.skipWaiting()
})

//activate
self.addEventListener('activate', e => {
    e.waitUntil(
        caches.keys()
            .then(keys => {
                return Promise.all(
                    keys.map(key => {
                        if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) {
                            console.log('removing old cache data', key)
                            return caches.delete(key)
                        }
                    })
                )
            })
    )
    self.ClientRectList.claim()
})