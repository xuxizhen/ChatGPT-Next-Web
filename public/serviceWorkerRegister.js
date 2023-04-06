if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('/serviceWorker.js').then(function (registration) {
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function (err) {
      console.error('ServiceWorker registration failed: ', err);
    });
  });
}

window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-KY2PKZDJDC');
