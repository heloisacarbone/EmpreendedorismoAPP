if ('serviceWorker' in navigator) {
  console.log('SERVICE WORKER !');
    navigator.serviceWorker.register('/sw.js')
      .then(function () {
        console.log('Service Worker Registered');
      })
      .catch(function () {
        console.warn('service worker failed');
      });
  }