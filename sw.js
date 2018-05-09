this.addEventListener('install',(event)=>{
    console.log("SW installed");
    event.waitUntil(
        caches.open('static')
        .then((cache)=>{
            cache.addAll([
                '/',
                '/index.html',
                '/main.js',
                '/style.css',
                '/images/taxi-type/auto.png',
                '/images/ola-prime-sedan.png',
                '/images/ola-select.png',
                '/images/ola-share-active.svg',
                '/images/tab-logo.png',
              
                // '/images/slider1/Ola-India-1.jpg',
                // '/images/slider1/Ola-India-2.jpg',
                // '/images/slider1/Ola-India-3.jpg',
                // '/images/slider1/Ola-India.jpg',

                // '/images/left-slider1/next-arrow.png',
                // '/images/left-slider1/prev-arrow.png',
                // '/images/left-slider1/ola-select.png',

                // '/images/info/left/00000000368.jpg',
                // '/images/info/left/00000000374.jpg',
                // '/images/info/left/00000000382.jpg',
          
                // '/images/info/right/00000000370.jpg',
                // '/images/info/right/00000000371.jpg',
                // '/images/info/right/00000000372.jpg',
      
                // '/images/footer/fb-footer-icon.svg',
                // '/images/footer/footer-ola-logo.svg',
                // '/images/footer/india-flag-icon.png',
                // '/images/footer/insta-footer-icon.svg',
                // '/images/footer/twitter-footer-icon.svg',
                // '/images/footer/youtube-footer-icon.svg',


            ]);
        })
    );
});
this.addEventListener('activate',()=>{
    console.log("SW Activated");
    caches.keys()
        .then(names=>{
            names.forEach(name=>{
                caches.delete(name);
            })
        })
});

this.addEventListener('fetch',(event)=>{
    event.respondWith(
        caches.match(event.request)
         .then((res)=>{
             if(res) return res;
             else return fetch(event.request);
         })
    );
});