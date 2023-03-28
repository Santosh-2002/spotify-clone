self.addEventListener('install' ,evt=>{
console.log('service worker is not loaded')
})
self.addEventListener('activate', evt=>{
    console.log('Service Worker is activated')
})
self.addEventListener('fetch', evt=>{
    console.log('Service Worker is fetched')
})